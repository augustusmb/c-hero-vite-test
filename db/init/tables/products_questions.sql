create table if not exists products_questions (
  product_id text,
  question_id int,
  foreign key (product_id) references products(id),
  foreign key (question_id) references questions(id)
);