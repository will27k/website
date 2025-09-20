# website

A modern single-page-style portfolio with a toggleable sidebar, cinematic hero shot, and a prototype NBA drinking game lobby.

## Pages

- **Home (`index.html`)** – Hero image sourced from Sora user creations, featured project spotlight, and quick CTAs into the rest of the site.
- **Projects (`projects/index.html`)** – Interactive cards highlighting the NBA Drinking Game lobby plus future ideas.
- **About (`about.html`)** – Coming-soon announcement with a friendly message.
- **NBA Drinking Game Lobby (`projects/nba-drinking-game.html`)** – Add and remove party participants, persist the lobby locally, and quick-add stars from Hashtag Basketball's fantasy rankings.

## Data pipeline

The lobby's "Fantasy player spotlight" pulls from Hashtag Basketball's fantasy rankings.

1. Visit <https://hashtagbasketball.com/fantasy-basketball-rankings> and export the table as CSV.
2. Save the file to `data/raw/hashtag_rankings.csv`.
3. Run `python tools/convert_hashtag_rankings.py` to normalize and publish the data to `data/hashtag_fantasy_rankings.json`.
4. Refresh the lobby page to see the updated quick-add list.

A 30-player sample (`data/hashtag_fantasy_rankings_sample.json`) is bundled for offline development.

## Development

Open `index.html` in your browser to explore the experience. The site uses vanilla HTML/CSS/JS, and no build tooling is required.
