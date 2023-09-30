import 'dotenv/config';
import  'colors';
import express, { urlencoded } from 'express';

//USER IMPORTED FILE :
import routes from './routes/userRoutes.js';
import db from './config/db.js';

const app = express();
db()


// middlewares
app.use(express.json());
app.use(urlencoded({extended:true}));

//routes
app.use("/api",routes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listinig at port  ${port}`.bgMagenta.bold)
});