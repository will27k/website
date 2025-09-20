(() => {
    const sidebar = document.querySelector('[data-sidebar]');
    const toggles = document.querySelectorAll('[data-nav-toggle]');
    const scrim = document.querySelector('[data-scrim]');

    if (!sidebar || toggles.length === 0) return;

    const updateState = (open) => {
        sidebar.dataset.open = open ? 'true' : 'false';
        document.body.classList.toggle('sidebar-open', open);
        scrim?.toggleAttribute('hidden', !open);
        toggles.forEach((btn) => btn.setAttribute('aria-expanded', String(open)));
        sidebar.setAttribute('aria-hidden', String(!open));

        if (open) {
            const firstFocusable = sidebar.querySelector('a, button');
            firstFocusable?.focus({ preventScroll: true });
        } else {
            toggles[0]?.focus({ preventScroll: true });
        }
    };

    const toggle = () => {
        const isOpen = sidebar.dataset.open === 'true';
        updateState(!isOpen);
    };

    toggles.forEach((btn) => btn.addEventListener('click', toggle));
    scrim?.addEventListener('click', () => updateState(false));

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidebar.dataset.open === 'true') {
            updateState(false);
        }
    });
})();
