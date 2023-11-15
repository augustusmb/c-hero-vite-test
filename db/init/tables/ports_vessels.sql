create table if not exists ports_vessels (
  port_id int,
  vessel_id int,
  foreign key (port_id) references ports(id),
  foreign key (vessel_id) references vessels(id)
);