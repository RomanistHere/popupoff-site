import mongoose from "mongoose";
// import { dev } from "$app/environment";

import { MONGO_URL } from "$env/static/private";

export const startMongo = async () => {
	// console.log("heh");
	// console.log(MONGO_URL);
	// const host = dev ? "http://localhost:5173" : "http://127.0.0.1:8787/";
	// console.log(host)
	// const resp = await fetch(`${host}/api/keys/getConnectStringDB`);
	// console.log(resp);
	// const { key } = await resp.json();
	// console.log(key);
	return mongoose.connect(MONGO_URL);
};

const db = mongoose.connection;
// eslint-disable-next-line no-console
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
