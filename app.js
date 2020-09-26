import bcrypt from 'bcrypt';

const pass = '2904';
const rounds = 14;

bcrypt.hash(pass, rounds).then((hash) => {
    console.log(hash);
});