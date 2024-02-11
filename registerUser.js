// netlify/functions/registerUser.js
exports.handler = async function (event, context) {
    const { email, password } = JSON.parse(event.body);

    try {
        // Your user registration logic here

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
