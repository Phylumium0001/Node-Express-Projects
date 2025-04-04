CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES category(category_id),
    price DECIMAL(10,2),
    quantity INTEGER,
    platform VARCHAR(50),
    condition VARCHAR(50)
)

CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
)

SELECT * FROM item;

INSERT INTO category (category_name) VALUES ('games');
INSERT INTO category (category_name) VALUES ('consoles');

INSERT INTO item (name, category_id, platform, price, quantity, condition) VALUES
('PlayStation 5', 2, 'PS5', 499.99, 15, 'New'),
('Xbox Series X', 2, 'Xbox Series X', 499.99, 12, 'New'),
('Nintendo Switch OLED', 2, 'Nintendo Switch', 349.99, 20, 'New'),
('PlayStation 4 Pro', 2, 'PS4', 249.99, 8, 'Used - Good'),
('Xbox One S', 2, 'Xbox One', 199.99, 5, 'Refurbished'),
('Nintendo Switch Lite', 2, 'Nintendo Switch', 199.99, 18, 'New'),
('PlayStation 5 Digital Edition', 2, 'PS5', 399.99, 7, 'New'),
('Xbox Series S', 2, 'Xbox Series S', 299.99, 14, 'New'),
('Steam Deck 512GB', 2, 'PC', 649.99, 9, 'New'),
('PlayStation 4 Slim', 2, 'PS4', 179.99, 6, 'Used - Good'),
('God of War Ragnarök', 1, 'PS5', 59.99, 11, 'New'),
('Horizon Forbidden West', 1, 'PS5', 39.99, 14, 'New'),
('Spider-Man 2', 1, 'PS5', 69.99, 8, 'New'),
('Final Fantasy XVI', 1, 'PS5', 69.99, 6, 'New'),
('Demon''s Souls', 1, 'PS5', 69.99, 4, 'New'),
('The Last of Us Part II', 1, 'PS4', 19.99, 12, 'Used - Good'),
('Ghost of Tsushima', 1, 'PS4', 29.99, 10, 'Used - Like New'),
('Persona 5 Royal', 1, 'PS4', 39.99, 7, 'New'),
('Red Dead Redemption 2', 1, 'PS4', 29.99, 15, 'Used - Good'),
('Uncharted 4: A Thief''s End', 1, 'PS4', 14.99, 9, 'Used - Good'),
('Starfield', 1, 'Xbox Series X', 69.99, 8, 'New'),
('Forza Motorsport', 1, 'Xbox Series X', 59.99, 6, 'New'),
('Halo Infinite', 1, 'Xbox Series X', 39.99, 13, 'New'),
('Gears 5', 1, 'Xbox Series X', 19.99, 11, 'Used - Good'),
('Microsoft Flight Simulator', 1, 'Xbox Series X', 59.99, 5, 'New'),
('Sea of Thieves', 1, 'Xbox One', 29.99, 6, 'Used - Like New'),
('Ori and the Will of the Wisps', 1, 'Xbox One', 29.99, 4, 'New'),
('Forza Horizon 4', 1, 'Xbox One', 19.99, 8, 'Used - Good'),
('Cuphead', 1, 'Xbox One', 19.99, 12, 'New'),
('Titanfall 2', 1, 'Xbox One', 9.99, 5, 'Used - Good'),
('The Legend of Zelda: Tears of the Kingdom', 1, 'Nintendo Switch', 59.99, 25, 'New'),
('Super Mario Bros. Wonder', 1, 'Nintendo Switch', 59.99, 18, 'New'),
('Pokémon Scarlet', 1, 'Nintendo Switch', 59.99, 15, 'New'),
('Metroid Prime Remastered', 1, 'Nintendo Switch', 39.99, 9, 'New'),
('Animal Crossing: New Horizons', 1, 'Nintendo Switch', 49.99, 22, 'Used - Like New'),
('Baldur''s Gate 3', 1, 'PC', 59.99, 14, 'New'),
('Cyberpunk 2077', 1, 'PC', 39.99, 12, 'New'),
('Star Wars Jedi: Survivor', 1, 'PC', 59.99, 7, 'New'),
('Cities: Skylines II', 1, 'PC', 49.99, 10, 'New'),
('Counter-Strike 2', 1, 'PC', 0.00, 99, 'Free'),
('The Last of Us Part I', 1, 'PS5', 69.99, 6, 'New'),
('Mario Kart 8 Deluxe', 1, 'Nintendo Switch', 49.99, 20, 'New'),
('Elden Ring', 1, 'PS5', 49.99, 14, 'Used - Like New'),
('Call of Duty: Modern Warfare II', 1, 'Xbox Series X', 59.99, 9, 'New'),
('Grand Theft Auto V', 1, 'PS4', 19.99, 25, 'Used - Good');