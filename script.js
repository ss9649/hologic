document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleMode');
    const modeLabel = document.getElementById('modeLabel');

    toggleSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        updateModeLabel();
    });

    function updateModeLabel() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        modeLabel.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';

        // Update custom properties based on the dark mode
        document.documentElement.style.setProperty('--bg-color', isDarkMode ? '#2b2b2b' : '#fff');
        document.documentElement.style.setProperty('--text-color', isDarkMode ? '#fff' : '#333');
        document.documentElement.style.setProperty('--header-bg', isDarkMode ? '#1a1a1a' : '#f0f0f0');
        document.documentElement.style.setProperty('--header-text', isDarkMode ? '#fff' : '#333');
    }

    // Initial label update
    updateModeLabel();
});
