module.exports=function(){
  const jwt=process.env.JWT_KEY;
 
    if (!jwt) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
      }
}