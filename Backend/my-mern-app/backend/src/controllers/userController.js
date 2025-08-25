class UserController {
    async createUser(req, res) {
        // Dummy response
        res.json({ message: 'User created (dummy)' });
    }

    async getUser(req, res) {
        // Dummy response
        res.json({ id: req.params.id, name: 'Test User', email: 'test@example.com' });
    }

    async updateUser(req, res) {
        // Dummy response
        res.json({ message: 'User updated (dummy)' });
    }
}

module.exports = new UserController();