import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from './models/user.js';

const connectionString = 'mongodb+srv://amir:2904@cluster0.t1yta.mongodb.net/secure-pass?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const usernmame = 'amir';
const pass = '2904';
const rounds = 12;

const createUser = (hashed_username, hashed_password) => {
    let user = new User({
        username: hashed_username,
        password: hashed_password
    });
    return user;
}

bcrypt.hash(usernmame, rounds).then((hashed_username) => {
    bcrypt.hash(pass, rounds).then((hashed_password) => {
        createUser(hashed_username, hashed_password).save().then((model) => {
            console.log(model);
        });
    });
});
