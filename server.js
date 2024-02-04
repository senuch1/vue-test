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

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/abc', { useNewUrlParser: true, useUnifiedTopology: true });

// Модель пользователя
const User = mongoose.model('User', {
    email: String,
    username: String,
    password: String,
});

// Регистрация пользователя
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    // Хеширование пароля
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

// Вход пользователя
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // Поиск пользователя по email
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        // Создание токена при успешной аутентификации
        const token = jwt.sign({ email }, 'secret_key', { expiresIn: '1h' });
        res.json({ success: true, token });
    } else {
        res.json({ success: false, error: 'Invalid email or password' });
    }
});

// Эндпоинт для получения данных пользователя
app.get('/profile/user', async (req, res) => {
    try {
        const authToken = req.headers.authorization;
        if (!authToken) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decodedToken = jwt.verify(authToken, 'secret_key');
        const userEmail = decodedToken.email;

        const user = await User.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
