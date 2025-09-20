(() => {
    const STORAGE_KEY = 'nbaLobbyPlayers.v1';
    const form = document.getElementById('player-form');
    const input = document.getElementById('player-name');
    const list = document.querySelector('[data-player-list]');
    const emptyState = document.querySelector('[data-empty-state]');
    const clearButton = document.querySelector('[data-clear-lobby]');
    const picksContainer = document.querySelector('[data-fantasy-picks]');

    if (!form || !input || !list || !emptyState) return;

    const loadPlayers = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (error) {
            console.warn('Unable to read saved lobby:', error);
            return [];
        }
    };

    let players = loadPlayers();

    const persist = () => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
        } catch (error) {
            console.warn('Unable to persist lobby:', error);
        }
    };

    const render = () => {
        list.innerHTML = '';
        if (players.length === 0) {
            emptyState.hidden = false;
            return;
        }

        emptyState.hidden = true;
        players.forEach((name, index) => {
            const item = document.createElement('li');
            item.className = 'lobby__list-item';

            const label = document.createElement('span');
            label.className = 'lobby__name';
            label.textContent = name;
            item.appendChild(label);

            const actions = document.createElement('div');
            actions.className = 'lobby__actions';

            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                players.splice(index, 1);
                persist();
                render();
                input.focus();
            });

            actions.appendChild(removeButton);
            item.appendChild(actions);
            list.appendChild(item);
        });
    };

    const addPlayer = (name) => {
        const trimmed = name.trim();
        if (!trimmed) return;
        if (players.some((entry) => entry.toLowerCase() === trimmed.toLowerCase())) {
            input.value = '';
            input.focus();
            return;
        }
        players = [...players, trimmed];
        persist();
        render();
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addPlayer(input.value);
        input.value = '';
        input.focus();
    });

    clearButton?.addEventListener('click', () => {
        if (players.length === 0) return;
        const confirmed = window.confirm('Clear everyone from the lobby?');
        if (!confirmed) return;
        players = [];
        persist();
        render();
        input.focus();
    });

    const createPick = (player) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'panel__player';
        wrapper.innerHTML = `
            <div>
                <strong>${player.rank}. ${player.name}</strong>
                <p style="margin: 0; font-size: 0.82rem; color: rgba(245,247,255,0.65);">
                    ${player.team} • ${player.position}
                </p>
            </div>
        `;

        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Add';
        button.addEventListener('click', () => {
            addPlayer(player.name);
        });

        wrapper.appendChild(button);
        return wrapper;
    };

    const loadFantasyPicks = async () => {
        if (!picksContainer) return;
        try {
            const attempt = async (url) => {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Request failed with ${response.status}`);
                return response.json();
            };

            const data = await attempt('../data/hashtag_fantasy_rankings.json').catch(() =>
                attempt('../data/hashtag_fantasy_rankings_sample.json')
            );

            data.slice(0, 8).forEach((player) => {
                picksContainer.appendChild(createPick(player));
            });
        } catch (error) {
            console.warn('Unable to load Hashtag Basketball rankings:', error);
            const fallback = document.createElement('p');
            fallback.style.margin = '0';
            fallback.style.color = 'rgba(245,247,255,0.65)';
            fallback.textContent = 'Fantasy spotlight unavailable right now. Try refreshing later.';
            picksContainer?.appendChild(fallback);
        }
    };

    render();
    loadFantasyPicks();
})();
