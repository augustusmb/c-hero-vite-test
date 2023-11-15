create table if not exists vessels_products (
  vessel_id int,
  product_id text,
  foreign key (vessel_id) references vessels(id),
  foreign key (product_id) references products(id)
);