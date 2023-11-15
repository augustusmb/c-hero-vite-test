create table if not exists questions (
  id serial primary key unique,
  title text,
  true_or_false boolean,
  correct_answer text,
  incorrect_answer1 text,
  incorrect_answer2 text,
  incorrect_answer3 text
);