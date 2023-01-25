// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.

(function () {
    const oldState = {count: 0};

    const counter = /** @type {HTMLElement} */ (document.getElementById('lines-of-code-counter'));

    let currentCount = (oldState && oldState.count) || 0;
    counter.textContent = `${currentCount}`;

    setInterval(() => {
        counter.textContent = `${currentCount++} `;
    }, 500);
}());
