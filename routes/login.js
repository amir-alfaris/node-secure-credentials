import express from 'express';
import sha from 'js-sha3';

import User from '../models/user.js';

const router = express.Router();

router.post('/', (req, res) => {
    User.findOne({
        username: sha.keccak256(req.body.username)
    }).then((err, user) => {
        if (user) {
            res.send('user present');
        } else {
            res.send('user does not exist');
        }
    });
});

export default router;