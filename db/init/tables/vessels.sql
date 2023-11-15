create table if not exists vessels (
  id serial primary key unique,
  name text,
  email text,
  phone text,
  type text
);