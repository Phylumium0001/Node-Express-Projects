const express = require('express');
const router = express.Router();
const queries = require('../models/queries')

// Membership activation page
router.get('/membership/activate', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  
  if (req.user.ismember) {
    return res.redirect('/?message=already_member');
  }
  
  res.render('membership/activate', {
    currentUser:req.session.passport.user,
    error: null,
    success: null
  });
});

// Handle activation submission
router.post('/membership/activate', async (req, res) => {
  const { code } = req.body;
  const user = req.session.passport.user;
  
  if (!user) {
    return res.redirect('/login');
  }
  try {
    // Validate passcode
    const isValid = await validatePasscode(code);
    
    if (!isValid) {
      return res.render('membership/activate', {
        currentUser:req.session.passport.user,
        error: 'Invalid passcode. Try again or contact the administrator.',
        success: null
      });
    }
    
    if (user.ismember){
      res.redirect("/")
    }
    // Update user membership status
    await queries.activateMembership(user.id);
    
    // Update session
    req.session.passport.user.ismember = true;
    
    res.render('index', {
      currentUser:req.session.passport.user,
      error: null,
      success: 'Membership activated! You now have full access to the board.'
    });
    
  } catch (err) {
    console.error('Activation error:', err);
    res.render('membership/activate', {
      currentUser:req.session.passport.user,
      error: 'System error. Please try again later.',
      success: null
    });
  }
});

// Helper functions (implement with your database)
async function validatePasscode(code) {
  // Compare with environment variable or database
  // return code === process.env.MEMBERSHIP_CODE;
  return code === "Sahelanthropus"
}

module.exports = router
