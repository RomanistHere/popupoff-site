import { json } from "@sveltejs/kit";

// import { Event } from "$db/models/event.model";

export async function POST(event) {
	console.log("HEH");
	try {
		const formData = await event.request.formData();
		const { message, email } = Object.fromEntries(formData);

		console.log(message);
		console.log(email);

		return json({ success: true });
	} catch (e) {
		console.log(e);
	}
}
