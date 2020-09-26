import mongoose from 'mongoose';
import express from 'express';
import body_parser from 'body-parser';

import create_user_router from './routes/create-user.js';
import list_user_router from './routes/list-user.js';

const connectionString = 'mongodb+srv://amir:2904@cluster0.t1yta.mongodb.net/secure-pass?retryWrites=true&w=majority';
const port = 3000;

const app = express();

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(body_parser.json());
app.use('/create', create_user_router);
app.use('/list', list_user_router);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});