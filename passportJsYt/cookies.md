# Cookies
Cookies are information set by the server which can be used to identify an authenticated user.
When we visit or login to a site, the response header we get contains a set-cookie property,
containing the information the server will use to verify our authentication. This cookie is then
saved in the browser and any other request send to the server, the cookie is attached to
the request header. This prevents the site from asking the user from signing in after
every request.


