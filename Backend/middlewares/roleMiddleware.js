const studentOnly = (req, res, next) => {
  if (req.user && req.user.role === 'student') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Students only.' });
  }
};

const clerkOnly = (req, res, next) => {
  if (req.user && req.user.role === 'clerk') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Clerks only.' });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

module.exports = { studentOnly, clerkOnly, adminOnly };
