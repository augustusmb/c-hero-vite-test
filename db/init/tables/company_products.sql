create table if not exists company_products (
  company_id int,
  product_id text,
  foreign key (company_id) references company(id),
  foreign key (product_id) references products(id)
);