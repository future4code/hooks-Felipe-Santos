CREATE TABLE movie ( 
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR (255) NOT NULL
);

INSERT INTO movie(id,name)
VALUES(
"01",
"senhor dos Aneis");

SELECT * FROM movie;

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES movie(id)
);

INSERT INTO Rating(id,comment,rate,movie_id)
VALUES(
"01","Muito Muito Bom!",7,"01");
SELECT * FROM Rating
JOIN movie ON Rating.movie_id=movie.id;

CREATE TABLE MovieCast(
movie_id VARCHAR(255),
actor VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES movie(id)
);

INSERT INTO MovieCast(movie_id,actor)
VALUES("01","Gandalf");
SELECT * FROM MovieCast
JOIN Rating ON MovieCast.movie_id=Rating.id;