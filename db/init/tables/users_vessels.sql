create table if not exists users_vessels (
  user_id int,
  vessel_id int,
  foreign key (user_id) references users(id),
  foreign key (vessel_id) references vessels(id)
);