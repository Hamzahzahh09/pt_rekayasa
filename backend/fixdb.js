const mysql = require('mysql2/promise');
(async () => {
  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: ''
    });
    console.log('Connected to MySQL!');

    // Find MySQL data directory
    const [datadirRes] = await conn.query("SHOW VARIABLES LIKE 'datadir'");
    console.log('Data dir:', datadirRes[0].Value);

    // Try various cleanup approaches
    try {
      await conn.query('USE `db_anugerah_rekayasa_new`');
    } catch (e) {
      console.log('Database does not exist yet');
    }

    try {
      await conn.query('DROP TABLE IF EXISTS `news`');
      console.log('Table news dropped successfully');
    } catch (e) {
      console.log('Could not drop news table directly:', e.message);
    }

    try {
      await conn.query('DROP DATABASE IF EXISTS `db_anugerah_rekayasa_new`');
      console.log('Database dropped successfully');
    } catch (e) {
      console.log('Could not drop database:', e.message);
    }

    try {
      await conn.query('CREATE DATABASE `db_anugerah_rekayasa_new`');
      console.log('Database created successfully');
    } catch (e) {
      console.log('Could not create database:', e.message);
    }

    await conn.end();
  } catch (e) {
    console.error('Error:', e.message);
  }
})();
