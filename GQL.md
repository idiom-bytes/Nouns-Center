# Nouns.Center

CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
);

CREATE TABLE [IF NOT EXISTS] Ideas (
  id serial PRIMARY KEY,
  title VARCHAR ( 50 ) UNIQUE NOT NULL,
  description VARCHAR ( 50 ) NOT NULL,
  submittedBy VARCHAR ( 50 ) NOT NULL,
  date DATETIME NOT NULL,
  votes INT,
  liked BOOLEAN,
  isAdmin BOOLEAN 
);

CREATE TABLE [IF NOT EXISTS] Ideas (
  id serial PRIMARY KEY,
  title VARCHAR ( 50 ) UNIQUE NOT NULL,
  description VARCHAR ( 50 ) NOT NULL,
  submittedBy VARCHAR ( 50 ) NOT NULL,
  date DATETIME NOT NULL,
  votes INT,
  liked BOOLEAN,
  isAdmin BOOLEAN 
);
