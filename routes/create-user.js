import express from 'express';
import bcrypt from 'bcrypt';
import sha from 'js-sha3';

import User from '../models/user.js';

const router = express.Router();

const rounds = 12;

const createUser = (hashed_username, hashed_password) => {
    let user = new User({
        username: hashed_username,
        password: hashed_password
    });
    return user;
};

router.post('/', (req, res) => {
    User.find({
        username: sha.keccak256(req.body.username)
    }).then((users) => {
        if (users.length > 0) {
            console.log('User ID not available');
            res.status(409).send('username not available');
        } else {
            bcrypt.hash(req.body.password, rounds).then((hashed_password) => {
                createUser(sha.keccak256(req.body.username), hashed_password).save().then((model) => {
                    console.log(model);
                    res.status(201).json(model);
                });
            });
        }
    });
});

export default router;