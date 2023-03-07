import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {

    const MongoDBURI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zm4s8tn.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MongoDBURI, {
        useNewUrlParser: true
    });

    mongoose.connection.on('connected', () => {
        console.log('DataBase Connected Successfully');
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Database Disconnected');
    })
    mongoose.connection.on('error', (error) => {
        console.log('error while connecting database', error.message);
    })
}

export default Connection;