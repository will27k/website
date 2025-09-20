const sidebar = document.getElementById('sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.sidebar__close');
const overlay = document.getElementById('sidebar-overlay');
const body = document.body;
const yearSpan = document.getElementById('year');

const setSidebarState = (isOpen) => {
    sidebar.classList.toggle('open', isOpen);
    overlay.classList.toggle('visible', isOpen);
    overlay.toggleAttribute('hidden', !isOpen);
    body.classList.toggle('sidebar-open', isOpen);
    toggleButton?.setAttribute('aria-expanded', String(isOpen));
    sidebar.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
        const focusTarget = sidebar.querySelector('a, button');
        focusTarget?.focus({ preventScroll: true });
    } else {
        toggleButton?.focus({ preventScroll: true });
    }
};

const toggleSidebar = () => {
    setSidebarState(!sidebar.classList.contains('open'));
};

toggleButton?.addEventListener('click', toggleSidebar);
closeButton?.addEventListener('click', () => setSidebarState(false));
overlay?.addEventListener('click', () => setSidebarState(false));

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('open')) {
        setSidebarState(false);
    }
});

sidebar.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'transform' && !sidebar.classList.contains('open')) {
        sidebar.scrollTop = 0;
    }
});

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
