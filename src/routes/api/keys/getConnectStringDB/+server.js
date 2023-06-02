import { dev } from "$app/environment";

import { MONGO_URL } from "$env/static/private";

export async function GET({ request, platform }) {
	console.log(platform.env);

	if (dev) {
		console.log("dev env");
	} else {
		console.log("prod env");
	}
}
