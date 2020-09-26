import express from 'express';
import bcrypt from 'bcrypt';

import User from './models/user.js';

const router = express.router();

const createUser = (hashed_username, hashed_password) => {
    let user = new User({
        username: hashed_username,
        password: hashed_password
    });
    return user;
};

router.post('/', (req, res) => {
    bcrypt.hash(req.body.username, req.body.password).then((hashed_username) => {
        bcrypt.hash(pass, rounds).then((hashed_password) => {
            createUser(hashed_username, hashed_password).save().then((model) => {
                console.log(model);
                res.status(201).json(model);
            });
        });
    });
});

export default router;