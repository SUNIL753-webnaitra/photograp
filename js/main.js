function openTab(event, tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => content.classList.remove('active'));

    // Remove 'active' class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => button.classList.remove('active'));

    // Show the current tab and add 'active' class to the clicked button
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}