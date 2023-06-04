import { dev } from "$app/environment";
import { json } from "@sveltejs/kit";

import { MONGO_URL } from "$env/static/private";

export async function GET({ request, platform }) {
	console.log(platform?.env);
	console.log(platform?.env?.MONGO_URL);
	console.log(MONGO_URL);

	if (platform?.env) {
		console.log("prod env");
		return json({ key: platform?.env?.MONGO_URL });
	} else if (dev && MONGO_URL) {
		console.log("dev env");
		return json({ key: MONGO_URL });
	}
}
