# website

A minimal personal site for sharing passion projects with a simple, modern aesthetic.

## Available pages

- **Home (`index.html`)** – Centered title card with a floating navigation toggle that opens links to Projects and About Me.
- **Projects (`projects/index.html`)** – Interactive tiles featuring the NBA Drinking Game prototype and three "Coming Soon" placeholders.
- **About Me (`about.html`)** – Coming soon sign while the bio is under construction.
- **NBA Drinking Game (`projects/nba-drinking-game.html`)** – Full party loop with a persistent lobby, scoreboard, and mystery-player rounds with hints, silhouette reveals, and a 150-player dataset.

### Data seeds

- `data/nba_players.csv` lists the active player sample that powers the mystery pool. Run `python tools/update_player_pool.py` after editing the CSV to regenerate the `PLAYER_POOL` constant in `scripts/nba.js`.

## Getting started

Open `index.html` in your browser to explore the experience. The interface is built with semantic HTML, modern CSS, and a touch of vanilla JavaScript for interactions.
