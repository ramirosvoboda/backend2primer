const authRole = (role) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ message: 'No autorizado' });
      }
  
      if (req.user.role !== role) {
        return res.status(403).json({ message: 'No tienes permisos suficientes' });
      }
  
      next();
    };
  };
  
  module.exports = { authRole };
  