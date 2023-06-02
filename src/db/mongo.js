import mongoose from "mongoose";

export const startMongo = async () => {
	const key = await fetch("/api/getConnectStringDB");
	return mongoose.connect(key);
};

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
