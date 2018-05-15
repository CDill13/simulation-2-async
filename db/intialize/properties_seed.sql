CREATE TABLE properties (
prop_id SERIAL PRIMARY KEY,
userid INT REFERENCES users(id) ON DELETE CASCADE,
property_name VARCHAR(60),
property_description VARCHAR(300),
address VARCHAR(120),
city VARCHAR(120),
state  VARCHAR(120),
zip VARCHAR(20),
img_url VARCHAR(556),
monthly_mortgage MONEY,
loan_amount MONEY,
desired_rent MONEY
);

