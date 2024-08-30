function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    document.body.classList.add(`${currentTheme}-theme`);
    updateIcon(currentTheme);

    // Toggle theme
    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-theme');
        const newTheme = isDarkMode ? 'light' : 'dark';
        
        document.body.classList.remove(isDarkMode ? 'dark-theme' : 'light-theme');
        document.body.classList.add(`${newTheme}-theme`);
        updateIcon(newTheme);
        
        // Save the theme choice
        localStorage.setItem('theme', newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'light') {
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Light mode icon
        } else {
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Dark mode icon
        }
    }
});

