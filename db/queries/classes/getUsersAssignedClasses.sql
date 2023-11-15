select
*
from 
users_products
where
user_id = ${userId}
order by
product_id
asc