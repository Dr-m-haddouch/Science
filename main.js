

// Function to update UI based on user authentication status
function updateUI(user) {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user.email);
        // Display the first letter of the email in the top right corner
        const userInitial = user.email ? user.email.charAt(0).toUpperCase() : '';
        document.getElementById('userInitial').innerText = userInitial;
        // Update UI elements for authenticated user
        // For example, you can show the user's name in the top right corner
        const displayName = user.displayName;
        document.getElementById('userDisplayName').innerText = displayName ? `Hello, ${displayName}!` : 'Hello!';
    } else {
        // User is signed out
        console.log('User is signed out');

        // Clear the user's initial when signed out
        document.getElementById('userInitial').innerText = '';

        // Update UI elements for non-authenticated user
        document.getElementById('userDisplayName').innerText = 'Hello!';
    }
}

// Function to redirect to the login page
function redirectToLogin() {
    // Redirect to the login page (assuming login.html)
    window.location.href = 'login1.html';
}

// Function to handle user authentication state changes
firebase.auth().onAuthStateChanged(function (user) {
    updateUI(user);
});
