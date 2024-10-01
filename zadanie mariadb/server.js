const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import połączenia z MariaDB

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Przykładowa trasa do wstawiania danych do bazy
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Błąd zapisu do bazy:', err);
      res.send('Błąd podczas zapisywania danych.');
    } else {
      res.send('Dane zapisane!');
    }
  });
});

// Przykładowa trasa do wyświetlania danych z bazy
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Błąd przy pobieraniu danych:', err);
      res.send('Błąd przy pobieraniu danych.');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
