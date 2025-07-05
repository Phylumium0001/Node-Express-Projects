# How Authorization and Sessions tie in together
Sessions are states of users stored(eg. database) 
Session id and some data is stored server-side, then the 
id is sent to the user via Set-Cookie property to the user
via the response.

@./passport/local
## Signing Up
- When we get the data (username,password) from the user,we hash it
using bcypt and save the hash to the database user(id,username,hash) 

## Login
- A passport strategy is defined
- We get the data from the user (username and password)
- We check hash the password and check it against the hash in the
database for the user

## Serialization
- Passport allows us to define the data we want to store in the
session by calling an express-session function.
- The data is stored in the server side and only the identifier is
sent to the user via a cookie
- The data saved during serialization can be used for anything like 
data on the user such as cart items
 - The deserialization is used to verify the sessino in the sessions 
 storage

