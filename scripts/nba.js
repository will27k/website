const form = document.getElementById('player-form');
const input = document.getElementById('player-name');
const list = document.getElementById('player-list');
const emptyState = document.querySelector('.empty-state');
const clearButton = document.getElementById('clear-lobby');
const yearSpan = document.getElementById('year');

const updateEmptyState = () => {
    const hasPlayers = list.children.length > 0;
    emptyState.style.display = hasPlayers ? 'none' : 'block';
};

const removePlayer = (item) => {
    item.classList.add('removing');
    item.addEventListener('animationend', () => {
        item.remove();
        updateEmptyState();
        input.focus({ preventScroll: true });
    }, { once: true });
};

const createPlayerItem = (name) => {
    const li = document.createElement('li');
    li.className = 'player-item';

    const playerName = document.createElement('span');
    playerName.className = 'player-item__name';
    playerName.textContent = name;

    const actions = document.createElement('div');
    actions.className = 'player-item__actions';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'player-item__remove';
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('aria-label', `Remove ${name}`);
    removeButton.addEventListener('click', () => removePlayer(li));

    actions.appendChild(removeButton);
    li.appendChild(playerName);
    li.appendChild(actions);

    return li;
};

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const trimmed = input.value.trim();

    if (!trimmed) {
        input.focus();
        return;
    }

    const playerItem = createPlayerItem(trimmed);
    list.appendChild(playerItem);
    updateEmptyState();
    form.reset();
    input.focus();
});

clearButton?.addEventListener('click', () => {
    if (list.children.length === 0) {
        return;
    }

    const confirmClear = window.confirm('Remove all players from the lobby?');
    if (!confirmClear) {
        return;
    }

    list.innerHTML = '';
    updateEmptyState();
    input.focus();
});

list?.addEventListener('keydown', (event) => {
    if (event.key !== 'Delete' && event.key !== 'Backspace') {
        return;
    }

    const target = event.target;
    if (target.classList.contains('player-item__remove')) {
        target.click();
    }
});

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

updateEmptyState();
