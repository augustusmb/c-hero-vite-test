create table if not exists users_products (
  user_id int,
  product_id text,
  completed boolean default false,
  date_completed timestamp,
  foreign key (user_id) references users(id),
  foreign key (product_id) references products(id)
);