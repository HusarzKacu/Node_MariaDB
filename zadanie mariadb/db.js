const mysql = require('mysql2');

// Konfiguracja połączenia
const connection = mysql.createConnection({
  host: 'localhost', // Zastąp odpowiednim hostem, np. 'localhost' lub '127.0.0.1'
  user: 'wojtek', // Twoja nazwa użytkownika do MariaDB
  password: 'kalafior', // Twoje hasło do MariaDB
  database: 'form' // Nazwa bazy danych, do której się łączysz
});

// Nawiązywanie połączenia
connection.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err.stack);
    return;
  }
  console.log('Połączono z bazą danych jako id ' + connection.threadId);
});

module.exports = connection;
