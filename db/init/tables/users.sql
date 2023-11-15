create table users (
  id serial primary key unique,
  name text,
  phone text not null,
  email text,
  title_function text,
  level int,
  picture text
);
