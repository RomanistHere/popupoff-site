import { json } from "@sveltejs/kit";

// import { Event } from "$db/models/event.model";

export async function POST(event) {
	try {
		const formData = await event.request.formData();
		const { message, email } = Object.fromEntries(formData);

		return json({ success: true });
	} catch (e) {
		console.log(e);
	}
}
