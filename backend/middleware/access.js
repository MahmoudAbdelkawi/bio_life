module.exports = function (req, res, next) {
    // 401 Unauthorized
    // 403 Forbidden 
    //this middleware function to check if you super admin/admin/sub admin to get access to some authorizations
  
    if (req.user.isSuperAdmin) {
      next();
    }else if(req.user.isAdmin){
     next();
    }else if(req.user.isSubAdmin){
      next();
     }
    else {
      return res.status(403).send('Access denied.');
    }
  
  }