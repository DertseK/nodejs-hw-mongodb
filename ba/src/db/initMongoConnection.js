import mongoose from 'mongoose';

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;

const uri = `mongodb+srv://denisderus:iKCQTEU3mJOT0GNu@cluster0.v7umglh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

export default async function initMongoConnection() {
  await mongoose.connect(uri, clientOptions);
  await mongoose.connection.db.admin().command({ ping: 1 });
  console.log('Mongo connection successfully established!');
}
