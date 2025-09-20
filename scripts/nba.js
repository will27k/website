const DEFAULT_PENALTY = 5;
const STORAGE_KEY = 'nbaDrinkingGameState';

const PLAYER_POOL = [
    {
        name: 'Stephen Curry',
        team: 'Golden State Warriors',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
        position: 'Point Guard',
        draftYear: 2009,
        jersey: 30,
        stats: { pts: 29.4, reb: 6.1, ast: 6.3 },
    },
    {
        name: 'LeBron James',
        team: 'Los Angeles Lakers',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
        position: 'Forward',
        draftYear: 2003,
        jersey: 23,
        stats: { pts: 28.5, reb: 8.2, ast: 7.3 },
    },
    {
        name: 'Giannis Antetokounmpo',
        team: 'Milwaukee Bucks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
        position: 'Forward',
        draftYear: 2013,
        jersey: 34,
        stats: { pts: 31.3, reb: 11.9, ast: 5.7 },
    },
    {
        name: 'Nikola Jokić',
        team: 'Denver Nuggets',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png',
        position: 'Center',
        draftYear: 2014,
        jersey: 15,
        stats: { pts: 26.4, reb: 12.4, ast: 9.0 },
    },
    {
        name: 'Jayson Tatum',
        team: 'Boston Celtics',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
        position: 'Forward',
        draftYear: 2017,
        jersey: 0,
        stats: { pts: 30.1, reb: 8.8, ast: 4.6 },
    },
    {
        name: 'Jimmy Butler',
        team: 'Miami Heat',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png',
        position: 'Forward',
        draftYear: 2011,
        jersey: 22,
        stats: { pts: 24.6, reb: 6.4, ast: 5.5 },
    },
    {
        name: 'Luka Dončić',
        team: 'Dallas Mavericks',
        teamLogo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
        photo: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
        position: 'Guard',
        draftYear: 2018,
        jersey: 77,
        stats: { pts: 32.9, reb: 8.6, ast: 8.8 },
    },
];

const defaultState = {
    players: [],
    scores: {},
    turnIndex: 0,
};

const loadState = () => {
    if (typeof window === 'undefined') {
        return { ...defaultState };
    }

    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            return { ...defaultState };
        }

        const parsed = JSON.parse(stored);
        return {
            players: Array.isArray(parsed.players) ? parsed.players.slice(0, 24) : [],
            scores: typeof parsed.scores === 'object' && parsed.scores !== null ? parsed.scores : {},
            turnIndex: Number.isInteger(parsed.turnIndex) ? parsed.turnIndex : 0,
        };
    } catch (error) {
        console.error('Failed to load stored state', error);
        return { ...defaultState };
    }
};

const persistState = () => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        const serializable = {
            players: state.players,
            scores: state.scores,
            turnIndex: state.turnIndex,
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
        console.warn('Unable to persist state', error);
    }
};

const state = loadState();

const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const main = document.querySelector('.nba-main');
const screens = document.querySelectorAll('.screen');
const lobbyEmpty = document.getElementById('lobby-empty');
const lobbyList = document.getElementById('player-list');
const playerForm = document.getElementById('player-form');
const playerInput = document.getElementById('player-name');
const clearLobbyButton = document.getElementById('clear-lobby');
const startGameButton = document.getElementById('start-game');
const resetScoreboardButton = document.getElementById('reset-scoreboard');
const scoreboardTable = document.querySelector('.score-table');
const scoreboardEmpty = document.getElementById('scoreboard-empty');
const scoreboardRows = document.getElementById('scoreboard-rows');

const turnPlayer = document.getElementById('current-turn-player');
const beginRoundButton = document.getElementById('begin-round');
const penaltyLabel = document.getElementById('penalty-label');
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('player-guess');
const guessDatalist = document.getElementById('player-options');
const roundFeedback = document.getElementById('round-feedback');
const teamLogo = document.getElementById('team-logo');
const playerPhoto = document.getElementById('player-photo');
const hintPosition = document.getElementById('hint-position');
const hintDraft = document.getElementById('hint-draft');
const hintJersey = document.getElementById('hint-jersey');
const hintPts = document.getElementById('hint-pts');
const hintReb = document.getElementById('hint-reb');
const hintAst = document.getElementById('hint-ast');

const resultEyebrow = document.getElementById('result-eyebrow');
const resultTitle = document.getElementById('result-title');
const resultPhoto = document.getElementById('result-photo');
const resultName = document.getElementById('result-name');
const resultTeam = document.getElementById('result-team');
const resultPosition = document.getElementById('result-position');
const resultDraft = document.getElementById('result-draft');
const resultJersey = document.getElementById('result-jersey');
const resultPts = document.getElementById('result-pts');
const resultReb = document.getElementById('result-reb');
const resultAst = document.getElementById('result-ast');
const resultMessage = document.getElementById('result-message');
const nextPlayerButton = document.getElementById('next-player');

if (penaltyLabel) {
    penaltyLabel.textContent = `${DEFAULT_PENALTY} drink stakes`;
}

if (guessDatalist) {
    PLAYER_POOL.forEach((player) => {
        const option = document.createElement('option');
        option.value = player.name;
        guessDatalist.appendChild(option);
    });
}

let currentMystery = null;
let lastMysteryName = null;

const normalizeName = (value) => value.trim().replace(/\s+/g, ' ');
const normalizeKey = (value) => normalizeName(value).toLowerCase();

const ensureScores = () => {
    const nextScores = {};
    state.players.forEach((name) => {
        const key = name;
        const existing = state.scores[key];
        nextScores[key] = existing ? { ...existing } : { given: 0, taken: 0 };
    });
    state.scores = nextScores;
    if (state.turnIndex >= state.players.length) {
        state.turnIndex = state.players.length === 0 ? 0 : state.players.length - 1;
    }
};

const showScreen = (name) => {
    screens.forEach((screen) => {
        screen.hidden = screen.dataset.screen !== name;
    });

    if (main) {
        main.setAttribute('data-stage', name);
    }
};

const renderPlayers = () => {
    if (!lobbyList) {
        return;
    }

    lobbyList.innerHTML = '';
    state.players.forEach((name, index) => {
        const li = document.createElement('li');
        li.className = 'player-item';
        if (index === state.turnIndex) {
            li.classList.add('is-active');
            li.setAttribute('aria-current', 'true');
        }

        const nameSpan = document.createElement('span');
        nameSpan.className = 'player-item__name';
        nameSpan.textContent = name;

        const totals = state.scores[name] ?? { given: 0, taken: 0 };
        const totalsBadge = document.createElement('span');
        totalsBadge.className = 'player-item__totals';
        totalsBadge.textContent = `${totals.given} given · ${totals.taken} taken`;

        const actions = document.createElement('div');
        actions.className = 'player-item__actions';

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'player-item__remove';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove ${name}`);
        removeButton.addEventListener('click', () => removePlayer(name));

        actions.appendChild(removeButton);
        li.appendChild(nameSpan);
        li.appendChild(totalsBadge);
        li.appendChild(actions);
        lobbyList.appendChild(li);
    });

    const hasPlayers = state.players.length > 0;
    if (lobbyEmpty) {
        lobbyEmpty.hidden = hasPlayers;
    }
};

const renderScoreboard = () => {
    if (!scoreboardTable || !scoreboardRows || !scoreboardEmpty) {
        return;
    }

    const hasPlayers = state.players.length > 0;
    scoreboardTable.hidden = !hasPlayers;
    scoreboardEmpty.hidden = hasPlayers;

    scoreboardRows.innerHTML = '';
    if (!hasPlayers) {
        return;
    }

    state.players.forEach((name, index) => {
        const row = document.createElement('tr');
        if (index === state.turnIndex) {
            row.classList.add('is-active');
            row.setAttribute('aria-current', 'true');
        }

        const nameCell = document.createElement('th');
        nameCell.scope = 'row';
        nameCell.textContent = name;

        const givenCell = document.createElement('td');
        givenCell.textContent = String(state.scores[name]?.given ?? 0);

        const takenCell = document.createElement('td');
        takenCell.textContent = String(state.scores[name]?.taken ?? 0);

        row.appendChild(nameCell);
        row.appendChild(givenCell);
        row.appendChild(takenCell);
        scoreboardRows.appendChild(row);
    });
};

const updateControls = () => {
    const hasPlayers = state.players.length > 0;

    if (startGameButton) {
        startGameButton.disabled = !hasPlayers;
    }

    if (clearLobbyButton) {
        clearLobbyButton.disabled = !hasPlayers;
    }

    if (resetScoreboardButton) {
        resetScoreboardButton.disabled = !hasPlayers;
    }
};

const syncUi = () => {
    ensureScores();
    renderPlayers();
    renderScoreboard();
    updateControls();
    persistState();
};

const addPlayer = (rawName) => {
    const trimmed = normalizeName(rawName);
    if (!trimmed) {
        return;
    }

    const exists = state.players.some((name) => normalizeKey(name) === normalizeKey(trimmed));
    if (exists) {
        playerInput?.focus({ preventScroll: true });
        return;
    }

    state.players.push(trimmed);
    syncUi();
};

const removePlayer = (name) => {
    const index = state.players.findIndex((player) => player === name);
    if (index === -1) {
        return;
    }

    state.players.splice(index, 1);
    if (state.turnIndex >= state.players.length) {
        state.turnIndex = state.players.length === 0 ? 0 : state.players.length - 1;
    }
    syncUi();
};

const clearLobby = () => {
    state.players = [];
    state.scores = {};
    state.turnIndex = 0;
    syncUi();
};

const resetScoreboard = () => {
    Object.keys(state.scores).forEach((key) => {
        state.scores[key] = { given: 0, taken: 0 };
    });
    persistState();
    renderPlayers();
    renderScoreboard();
};

const getRandomMystery = () => {
    if (PLAYER_POOL.length === 0) {
        return null;
    }

    let candidate = PLAYER_POOL[Math.floor(Math.random() * PLAYER_POOL.length)];
    if (PLAYER_POOL.length > 1) {
        let attempts = 0;
        while (candidate.name === lastMysteryName && attempts < 5) {
            candidate = PLAYER_POOL[Math.floor(Math.random() * PLAYER_POOL.length)];
            attempts += 1;
        }
    }
    lastMysteryName = candidate.name;
    return candidate;
};

const updateHintUi = (player) => {
    if (!player) {
        return;
    }

    if (teamLogo) {
        teamLogo.src = player.teamLogo;
        teamLogo.alt = `${player.team} logo`;
    }
    if (playerPhoto) {
        playerPhoto.src = player.photo;
        playerPhoto.classList.add('is-blurred');
    }

    if (hintPosition) {
        hintPosition.textContent = player.position;
    }
    if (hintDraft) {
        hintDraft.textContent = String(player.draftYear);
    }
    if (hintJersey) {
        hintJersey.textContent = `#${player.jersey}`;
    }
    if (hintPts) {
        hintPts.textContent = player.stats.pts.toFixed(1);
    }
    if (hintReb) {
        hintReb.textContent = player.stats.reb.toFixed(1);
    }
    if (hintAst) {
        hintAst.textContent = player.stats.ast.toFixed(1);
    }
};

const updateResultUi = (isCorrect) => {
    if (!currentMystery) {
        return;
    }

    const rewardText = `${DEFAULT_PENALTY} drinks`;
    if (resultEyebrow) {
        resultEyebrow.textContent = isCorrect ? 'Bingo' : 'Close call';
    }
    if (resultTitle) {
        resultTitle.textContent = isCorrect
            ? `Correct! Allocate ${rewardText}.`
            : `Incorrect! Drink ${rewardText}.`;
    }
    if (resultPhoto) {
        resultPhoto.src = currentMystery.photo;
        resultPhoto.alt = `${currentMystery.name} portrait`;
    }
    if (resultName) {
        resultName.textContent = currentMystery.name;
    }
    if (resultTeam) {
        resultTeam.textContent = currentMystery.team;
    }
    if (resultPosition) {
        resultPosition.textContent = currentMystery.position;
    }
    if (resultDraft) {
        resultDraft.textContent = String(currentMystery.draftYear);
    }
    if (resultJersey) {
        resultJersey.textContent = `#${currentMystery.jersey}`;
    }
    if (resultPts) {
        resultPts.textContent = currentMystery.stats.pts.toFixed(1);
    }
    if (resultReb) {
        resultReb.textContent = currentMystery.stats.reb.toFixed(1);
    }
    if (resultAst) {
        resultAst.textContent = currentMystery.stats.ast.toFixed(1);
    }
    if (resultMessage) {
        resultMessage.textContent = isCorrect
            ? `Nice work! Share the ${DEFAULT_PENALTY} drinks however you want.`
            : `Better luck next time. Down ${DEFAULT_PENALTY} drinks and pass to the next player.`;
    }
};

const startTurnGate = () => {
    if (!turnPlayer) {
        return;
    }
    if (state.players.length === 0) {
        showScreen('lobby');
        return;
    }

    const current = state.players[state.turnIndex] ?? state.players[0];
    turnPlayer.textContent = current;
    showScreen('turn');
};

const startRound = () => {
    currentMystery = getRandomMystery();
    if (!currentMystery) {
        return;
    }
    updateHintUi(currentMystery);
    if (roundFeedback) {
        roundFeedback.textContent = '';
    }
    guessForm?.reset();
    showScreen('round');
    window.requestAnimationFrame(() => {
        guessInput?.focus({ preventScroll: true });
    });
};

const applyResult = (isCorrect) => {
    if (state.players.length === 0) {
        showScreen('lobby');
        return;
    }

    const current = state.players[state.turnIndex] ?? state.players[0];
    const playerScore = state.scores[current] ?? { given: 0, taken: 0 };
    if (isCorrect) {
        playerScore.given += DEFAULT_PENALTY;
    } else {
        playerScore.taken += DEFAULT_PENALTY;
    }
    state.scores[current] = playerScore;
    updateResultUi(isCorrect);
    renderPlayers();
    renderScoreboard();
    persistState();
    showScreen('result');
};

const advanceTurn = () => {
    if (state.players.length === 0) {
        showScreen('lobby');
        return;
    }
    state.turnIndex = (state.turnIndex + 1) % state.players.length;
    persistState();
    renderPlayers();
    renderScoreboard();
    startTurnGate();
};

playerForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!playerInput) {
        return;
    }

    addPlayer(playerInput.value);
    playerForm.reset();
    playerInput.focus({ preventScroll: true });
});

clearLobbyButton?.addEventListener('click', () => {
    if (state.players.length === 0) {
        return;
    }

    const confirmed = window.confirm('Remove all players from the lobby?');
    if (!confirmed) {
        return;
    }

    clearLobby();
    playerInput?.focus({ preventScroll: true });
});

resetScoreboardButton?.addEventListener('click', () => {
    if (state.players.length === 0) {
        return;
    }
    const confirmed = window.confirm('Reset drink totals for everyone?');
    if (!confirmed) {
        return;
    }
    resetScoreboard();
});

startGameButton?.addEventListener('click', () => {
    if (state.players.length === 0) {
        return;
    }

    if (state.turnIndex >= state.players.length) {
        state.turnIndex = 0;
    }
    persistState();
    renderPlayers();
    renderScoreboard();
    startTurnGate();
});

beginRoundButton?.addEventListener('click', () => {
    startRound();
});

const backToLobbyButtons = document.querySelectorAll('[data-action="back-to-lobby"]');
backToLobbyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        showScreen('lobby');
    });
});

if (guessForm) {
    guessForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!guessInput || !currentMystery) {
            return;
        }

        const guess = normalizeName(guessInput.value);
        if (!guess) {
            if (roundFeedback) {
                roundFeedback.textContent = 'Enter a player name before submitting.';
            }
            guessInput.focus({ preventScroll: true });
            return;
        }

        if (roundFeedback) {
            roundFeedback.textContent = '';
        }

        const isCorrect = normalizeKey(guess) === normalizeKey(currentMystery.name);
        applyResult(isCorrect);
    });
}

nextPlayerButton?.addEventListener('click', () => {
    advanceTurn();
});

syncUi();
