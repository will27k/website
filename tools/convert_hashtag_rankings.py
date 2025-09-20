#!/usr/bin/env python3
"""Convert Hashtag Basketball rankings into the JSON feed used by the lobby quick picks.

Download the rankings from https://hashtagbasketball.com/fantasy-basketball-rankings
as a CSV file and place it at data/raw/hashtag_rankings.csv. Then run this script:

    python tools/convert_hashtag_rankings.py

The script will normalize the headings and save a compact JSON file at
``data/hashtag_fantasy_rankings.json`` ready for use on the site.
"""

from __future__ import annotations

import csv
import json
from pathlib import Path
from typing import List, TypedDict

ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / 'data' / 'raw' / 'hashtag_rankings.csv'
OUTPUT = ROOT / 'data' / 'hashtag_fantasy_rankings.json'


class RankingEntry(TypedDict):
    rank: int
    name: str
    team: str
    position: str


def sanitize_team(value: str) -> str:
    team = value.strip().upper()
    return team[:3] if len(team) > 3 else team


def row_to_entry(row: dict) -> RankingEntry:
    raw_rank = row.get('Rank') or row.get('#') or row.get('Overall')
    if raw_rank is None:
        raise ValueError('Unable to find a rank column in the CSV file')
    try:
        rank = int(raw_rank)
    except ValueError as exc:
        raise ValueError(f'Invalid rank value: {raw_rank}') from exc

    name = (row.get('Player') or row.get('Name') or '').strip()
    if not name:
        raise ValueError('Player name missing in a row')

    team = row.get('Team', '').strip()
    position = row.get('Pos') or row.get('Position') or ''

    return {
        'rank': rank,
        'name': name,
        'team': sanitize_team(team),
        'position': position.strip() or '?',
    }


def load_csv(path: Path) -> List[RankingEntry]:
    with path.open(newline='', encoding='utf-8-sig') as handle:
        reader = csv.DictReader(handle)
        return [row_to_entry(row) for row in reader]


def save_json(entries: List[RankingEntry], path: Path) -> None:
    with path.open('w', encoding='utf-8') as handle:
        json.dump(entries, handle, indent=2)
        handle.write("\n")


def main() -> None:
    if not INPUT.exists():
        raise SystemExit(
            "No CSV file found. Download the Hashtag Basketball rankings and place them at "
            f"{INPUT.relative_to(ROOT)}"
        )

    entries = sorted(load_csv(INPUT), key=lambda row: row['rank'])
    save_json(entries, OUTPUT)
    print(f"Saved {len(entries)} players to {OUTPUT.relative_to(ROOT)}")


if __name__ == '__main__':
    main()
