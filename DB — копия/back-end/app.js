import express from 'express'
import mongoose from'mongoose'
import dotenv from "dotenv";

import notFound from './middleware/error.middleware.js'
import derectorRoutes from './routes/derector.routes.js'
import loginRoutes from './routes/login.routes.js'
import adminRoutes from './routes/admin.routes.js';
import bakerRoutes from './routes/baker.routes.js';
import sellerRoutes from './routes/seller.routes.js';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API запущен...");
});

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use("/api/login", loginRoutes)
app.use("/api/director", derectorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/baker", bakerRoutes);
app.use("/api/seller", sellerRoutes);


app.use(notFound);

dotenv.config();
const PORT = 5000;


const connectDB = async () => {
    try {
        mongoose.connect('mongodb+srv://admin:uBC9gVzUehhfEKvEvasW@cluster0.tzrf4.mongodb.net/project?retryWrites=true&w=majority')
            .then( () => console.log('MongoDB started') )
            .catch(error => console.log(error))
        app.listen(PORT, () => console.log(`Server started on PORT 5000`))
    } catch (e) {
        console.log(e);
    }
};

connectDB();