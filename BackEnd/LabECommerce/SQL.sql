CREATE TABLE labecommerce_users(
id VARCHAR(25) PRIMARY KEY ,
name VARCHAR(255) NOT NULL ,
email VARCHAR(255) NOT NULL ,
password VARCHAR (255) NOT NULL
);

SELECT * FROM labecommerce_users ;

INSERT INTO labecommerce_users(id,name,email,password)
VALUES("01","Felipe","felipe123@gmail.com","123456");

CREATE TABLE labecommerce_products(
id VARCHAR(25) PRIMARY KEY ,
name VARCHAR(255) NOT NULL ,
price VARCHAR(255) NOT NULL,
image_url VARCHAR(255) NOT NULL
);

SELECT * FROM labecommerce_products;

INSERT INTO labecommerce_products(id,name,price,image_url)
VALUES("01","Computador","4500","https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/n/a/narok-mancer-intel-rtx-0001_6_4.jpg")
