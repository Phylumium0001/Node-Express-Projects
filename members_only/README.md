# Members only Authentications
## Database design
- User - ID, Firstname, Lastname, emails, hash, membership-status,admin_status
- Message - User.id, Title, timestamp, content
- User - Optional field for admin

## Experience Flow
- **Sign Up Page** : Save new users and should not be give membership status
automatically. 
- **Join the club Page** : Entering the right code will update the user's 
membership status. 
- **LogIn Page** : Sign In existing users
- **Messaging Board** : Will display all messages and users Logged in users can see "Create a new message" which redirects to a form


## Special features
- admin user can see and interact with delete button to delete messages.



