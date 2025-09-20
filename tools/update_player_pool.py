#!/usr/bin/env python3
"""Utility to sync the PLAYER_POOL constant from the CSV seed."""

from __future__ import annotations

import csv
from pathlib import Path
from typing import Dict, List

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / 'data' / 'nba_players.csv'
JS_PATH = ROOT / 'scripts' / 'nba.js'


def _quote(value: str) -> str:
    escaped = value.replace('\\', '\\\\').replace("'", r"\'")
    return f"'{escaped}'"


def _format_stats(row: Dict[str, str]) -> str:
    return (
        "        stats: { "
        f"pts: {float(row['pts']):.1f}, "
        f"reb: {float(row['reb']):.1f}, "
        f"ast: {float(row['ast']):.1f} "
        "},"
    )


def _format_player(row: Dict[str, str]) -> str:
    parts: List[str] = [
        "    {",
        f"        name: {_quote(row['name'])},",
        f"        team: {_quote(row['team'])},",
        f"        teamLogo: {_quote(f'https://cdn.nba.com/logos/nba/{row['team_id']}/primary/L/logo.svg')},",
        f"        photo: {_quote(f'https://cdn.nba.com/headshots/nba/latest/1040x760/{row['person_id']}.png')},",
        f"        position: {_quote(row['position'])},",
        f"        draftYear: {int(row['draft_year'])},",
        f"        jersey: {int(row['jersey'])},",
        _format_stats(row),
        "    }",
    ]
    return "\n".join(parts)


def build_player_block() -> str:
    with CSV_PATH.open(newline='', encoding='utf-8') as fh:
        reader = csv.DictReader(fh)
        entries = [_format_player(row) for row in reader]
    joined = ",\n".join(entries)
    return f"const PLAYER_POOL = [\n{joined}\n];\n\n"


def main() -> None:
    block = build_player_block()
    text = JS_PATH.read_text(encoding='utf-8')
    needle = 'const PLAYER_POOL = ['
    start = text.index(needle)
    end = text.index('];', start)
    end += 3
    updated = text[:start] + block + text[end:]
    JS_PATH.write_text(updated, encoding='utf-8')


if __name__ == '__main__':
    main()
