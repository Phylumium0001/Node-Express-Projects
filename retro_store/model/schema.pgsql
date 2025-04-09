-- Active: 1743720458136@@127.0.0.1@5432@retro_store
CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES category(category_id),
    price DECIMAL(10,2),
    quantity INTEGER,
    platform VARCHAR(50),
    condition VARCHAR(50),
    description VARCHAR(250)
)

CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
)


SELECT * FROM item;

INSERT INTO category (category_name) VALUES ('games');
INSERT INTO category (category_name) VALUES ('consoles');
