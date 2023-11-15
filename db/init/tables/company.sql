create table if not exists company (
  id serial primary key unique,
  name text,
  address_1 text,
  address_2 text,
  city text,
  province text,
  state text,
  zip text,
  large_logo text,
  small_logo text,
  branch_type text
);