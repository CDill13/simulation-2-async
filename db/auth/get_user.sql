SELECT id, username, password
FROM users 
WHERE username=$1 AND password =$2;