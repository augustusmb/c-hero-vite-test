INSERT INTO
  users (name, phone, email, title_function, company, port, vessel, level)
VALUES
  (${name}, ${phone}, ${email}, ${title_function}, ${company}, ${port}, ${vessel}, ${level})
ON CONFLICT (phone)
DO NOTHING
RETURNING id