update users
set name = ${name},
    email = ${email},
    title_function = ${title},
    company = ${company}, 
    vessel = ${vessel}, 
    port = ${port}
where id = ${id}