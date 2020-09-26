import express from 'express';

import User from './models/user.js';

const router = express.router();

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.json(err);
        }
        res.json(users);
    });
});

export default router;