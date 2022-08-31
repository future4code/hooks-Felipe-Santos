
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE pessoas(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR (38),
 email VARCHAR (100) NOT NULL UNIQUE,
 PRIMARY KEY(id)
);

DESCRIBE pessoas;

CREATE TABLE pessoas(
  id INT PRIMARY KEY ,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

DESCRIBE pessoas;

INSERT INTO pessoas(id,name,email)
VALUES ("1","KRATOS","KRATOSGODOFWAR@gmail.com"),
       ("2","Luana","lua@lbn.com"),
       ("3","Vinicius","vini@lbn.com"),
       ("4","Laura","lau@lbn.com"),
	   ("5","Yuzo","yuzo@lbn.com");
DESCRIBE pessoas;

SELECT * FROM pessoas;
SELECT id as identifier from pessoa;

#DELETE FROM exemplo "name" WHERE "id";
SELECT id AS "identifier", name FROM pessoas ;
SELECT id,name FROM pessoas;
SELECT * FROM pessoas where id="1";
SELECT * FROM pessoas WHERE name LIKE "%a%";
SELECT * FROM pessoas WHERE name NOT LIKE "%r%" AND email LIKE "%u%";
#DROP TABLE pessoas
DELETE FROM pessoas WHERE id ="5";

INSERT INTO pessoas(id,name,email)
VALUES("06","YAKUZA","Yazuka@gmail.com");
