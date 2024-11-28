const Redis = require('ioredis');

// Pobierz REDIS_URL ze zmiennych środowiskowych
const redisClient = new Redis(process.env.REDIS_URL);

// Test połączenia
redisClient.ping()
    .then(() => console.log('✅ Redis działa poprawnie'))
    .catch(err => console.error('❌ Błąd Redis:', err));

// Uruchom prosty serwer HTTP, aby Railway mógł monitorować aplikację
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Aplikacja działa!'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Aplikacja działa na porcie ${PORT}`));
