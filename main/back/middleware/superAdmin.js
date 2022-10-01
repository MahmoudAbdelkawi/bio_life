module.exports = function (req, res, next) { 
    // 401 Unauthorized
    // 403 Forbidden 
        //this middleware function to check if you super admin to get access to some authorizations

    if (!req.user.isSuperAdmin) return res.status(403).send('Access denied.');
  
    next();
  }