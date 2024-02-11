// functions/registerUser.js
const firebase = require('firebase-admin');
const functions = require('firebase-functions');

        // Initialize Firebase with your configuration
        const firebaseConfig = {
            apiKey: 'AIzaSyAT8ZJK_kVZOJSf7mMssevJhB6CwD8t1SA',
            authDomain: 'science-0.firebaseapp.com',
            projectId: 'science-0',
            storageBucket: 'science-0.appspot.com',
            messagingSenderId: '147611003857',
            appId: '1:147611003857:web:961e5e301a133576784ef0',
        };

const firebaseAdmin = firebase.initializeApp(adminConfig);

exports.handler = async function (event, context) {
    const { email, password } = JSON.parse(event.body);

    try {
        // Your user registration logic here using firebaseAdmin

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error('Registration error:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Registration failed' }),
        };
    }
};
