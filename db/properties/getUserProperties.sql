SELECT username, userid, property_name, property_description, address, city, state, zip, img_url, monthly_mortgage, loan_amount, desired_rent 
FROM properties 
JOIN users ON properties.userid = users.id
WHERE username = $1;