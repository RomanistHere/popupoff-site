import mongoose from "mongoose";
import { dev } from "$app/environment";

export const startMongo = async () => {
	const host = dev ? "http://localhost:5173" : "https://popupoff.org";
	const resp = await fetch(`${host}/api/keys/getConnectStringDB`);
	const { key } = await resp.json();
	return mongoose.connect(key);
};

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
