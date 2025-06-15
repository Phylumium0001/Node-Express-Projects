const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const connection = require('./database');
const findOne = require("./database_pg").findOne
const findId = require("./database_pg").findId
// const User = connection.models.User;
const validPassword = require("../lib/passwordUtils").validPassword

// TODO: passport.use();
const customFields = {
    username : 'username',
    password : "password"
}
const verifyCallback = (username, password,done) =>{
    // Username and password from the user via request
    // Passport gets them automatically after the post request
    // when the passport.authenticate middleware is used
    // Naming should be exact for username and password
    // done (error,status)
    console.log(`Username : ${username}\nPassword : ${password}`);
    
    // To verify the user
    findOne(username)
        .then((data)=>{
            console.log(data[0]);
            
            user = data[0]
            
            // No user found
            if (!user){ return done(null,false) }

            isValid = validPassword(password,user.hash,user.salt);
            
            if (isValid){
                // Valid User
                return done(null,user);
            }else{
                return done(null,false);
            }
        })
        .catch((err)=>{
            done(err)
        });

}

const strategy = new LocalStrategy(customFields,verifyCallback)
passport.use(strategy)

passport.serializeUser((user,done)=>{
    done(null, user.id)
})
passport.deserializeUser((userId,done)=>{
    findId(userId)
        .then((user)=>{
            done(null, user)
        })
        .catch(err => done(err))
})

// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');

// function initialize(passport, getUserByEmail, getUserById) {
//   const authenticateUser = async (username, password, done) => {
//     const user = await findOne(username);
//     if (user.length == 0) {
//       return done(null, false, { message: 'No user with that email' });
//     }
//     try {
//     //   if (await bcrypt.compare(password, user[0].user_password)) {
//         if (validPassword(password,user[0].hash,user[0].salt)){
//         return done(null, user[0]);
//       } else {
//         return done(null, false, { message: 'Password incorrect' });
//       }
//     } catch (e) {
//       return done(e);
//     }
//   };
//   passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser));
//   passport.serializeUser((user, done) => done(null, user.user_id));
//   passport.deserializeUser(async (id, done) => {
//     const user = await findId(id);
//     return done(null, user[0]);
//   });
// }
// module.exports = initialize;