CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY UNIQUE,
  firstname text,
  lastname text,
  email text,
  hash text,
  isAdmin BOOLEAN DEFAULT FALSE,
  isMember BOOLEAN DEFAULT FALSE
);
CREATE TABLE IF NOT EXISTS messages(
  id UUID PRIMARY KEY UNIQUE,
  user_id UUID REFERENCES users(id),
  title text,
  content text,
  timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
