INSERT INTO properties (
    userid,
    property_name,
    property_description,
    address,
    city,
    state,
    zip,
    img_url,
    monthly_mortgage,
    loan_amount,
    desired_rent
)
values(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11
);