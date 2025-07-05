const express = require('express');
const router = express.Router();

// Membership activation page
router.get('/membership/activate', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  
  if (req.user.isMember) {
    return res.redirect('/?message=already_member');
  }
  
  res.render('membership/activate', {
    error: null,
    success: null
  });
});

// Handle activation submission
router.post('/membership/activate', async (req, res) => {
  const { passcode } = req.body;
  const user = req.user;
  
  if (!user) {
    return res.redirect('/login');
  }
  
  try {
    // Validate passcode
    const isValid = await validatePasscode(passcode);
    
    if (!isValid) {
      return res.render('membership/activate', {
        error: 'Invalid passcode. Try again or contact the administrator.',
        success: null
      });
    }
    
    // Update user membership status
    await activateMembership(user.id);
    
    // Update session
    req.user.isMember = true;
    
    res.render('membership/activate', {
      error: null,
      success: 'Membership activated! You now have full access to the board.'
    });
    
  } catch (err) {
    console.error('Activation error:', err);
    res.render('membership/activate', {
      error: 'System error. Please try again later.',
      success: null
    });
  }
});

// Helper functions (implement with your database)
async function validatePasscode(code) {
  // Compare with environment variable or database
  return code === process.env.MEMBERSHIP_CODE;
}

async function activateMembership(userId) {
  // Update user in database
  // Example: UPDATE users SET is_member = true WHERE id = $1
}
