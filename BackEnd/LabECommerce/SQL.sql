CREATE TABLE labecommerce_users(
id VARCHAR(25) PRIMARY KEY ,
name VARCHAR(255) NOT NULL ,
email VARCHAR(255) NOT NULL ,
password VARCHAR (255) NOT NULL
);

SELECT * FROM labecommerce_users ;

INSERT INTO labecommerce_users(id,name,email,password)
VALUES("01","Felipe","felipe123@gmail.com","123456");
