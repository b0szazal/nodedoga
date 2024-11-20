import express from 'express';
import {expressRouter} from './routes/express.js';
import {greetingRouter} from './routes/greeting.js';
import {nodejsRouter} from './routes/nodejs.js';
import bodyParser from 'body-parser';
import { rootRouter } from './routes/root.js';
import { apiUsersRouter } from './routes/users.js';


const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.set("views", "public");
app.use(bodyParser.urlencoded({ extended: true }));



app.use(expressRouter);
app.use(greetingRouter);
app.use(nodejsRouter);
app.use(rootRouter);
app.use(apiUsersRouter)

app.listen(port, () => {
    console.log(`Hi there`);
    console.log(`Server is running on port http://localhost:${port}/`); 
    console.log(`To access the API endpoints, visit http://localhost:${port}/api/users`);    
})