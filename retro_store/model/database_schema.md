The database schema
## Category
```sql
CREATE TABLE category (
    id INTEGER PRiMARY KEY,
    name VARCHAR(255) NOT NULL
);
```

## Item
```sql
CREATE TABLE item(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES category(id),
    price DECIMAL(10,2),
    quantity INTEGER,
    condition VARCHAR(50)
);
```