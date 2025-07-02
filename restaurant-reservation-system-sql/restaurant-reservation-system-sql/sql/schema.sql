CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

CREATE TABLE IF NOT EXISTS reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(15),
  guests INT,
  reservation_time DATETIME
);
