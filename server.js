const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/abc', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    email: String,
    username: String,
    password: String,
});

const Topic = mongoose.model('Topic', {
    title: String,
    description: String,
    username: String,
});

app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        username,
        password: hashedPassword,
    });

    user.save()
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ success: false, error: error.message }));
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email, username: user.username, email: user.email }, 'secret_key', { expiresIn: '10h' });
        res.json({ success: true, token, username: user.username, email: user.email });
    } else {
        res.json({ success: false, error: 'Invalid email or password' });
    }
});

app.get('/profile', async (req, res) => {
    try {
        const username = req.user.username;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            username: user.username,
            _id: user._id,
            email: user.email,
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/profile/:username', async (req, res) => {
    try {
        const username = req.params.username;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            username: user.username,
            _id: user._id,
            email: user.email,
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Создание темы
app.post('/create-topic', async (req, res) => {
    try {
        const { title, description } = req.body;
        const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, 'secret_key'); 

        if (!decodedToken) {
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }

        const { username } = decodedToken;

        const topic = new Topic({
            title,
            description,
            username,
        });

        await topic.save();
        res.json({ success: true });
    } catch (error) {
        console.error('Error creating topic:', error);
        res.json({ success: false, error: error.message });
    }
});



app.get('/get-topics', async (req, res) => {
    try {
        const topics = await Topic.find();
        res.json({ topics });
    } catch (error) {
        console.error('Error fetching topics:', error);
        res.json({ error: error.message });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
