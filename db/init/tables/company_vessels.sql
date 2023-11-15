create table if not exists company_vessels (
  company_id int,
  vessel_id int,
  foreign key (company_id) references company(id),
  foreign key (vessel_id) references vessels(id)
);