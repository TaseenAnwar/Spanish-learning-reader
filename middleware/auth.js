// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: 'Not authenticated' });
}

// Middleware to optionally check authentication (doesn't block if not authenticated)
function optionalAuth(req, res, next) {
    // Just pass through, but req.user will be available if authenticated
    next();
}

module.exports = {
    isAuthenticated,
    optionalAuth
};
