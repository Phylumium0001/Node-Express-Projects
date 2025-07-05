const crypto = require('crypto');

// TODO
function validPassword(password, hash, salt) {
    console.log("Verifying password");
    
    const verifyHash = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex');
    
    return verifyHash == hash;
};
function genPassword(password) {
    console.log("Generating New User");
    
    const salt = crypto.randomBytes(32).toString('hex')
    // (password,salt, iterations, length, hash_func)
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString("hex")

    return {
        salt:salt,
        hash:genHash
    }
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;