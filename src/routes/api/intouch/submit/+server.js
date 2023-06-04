import { json } from "@sveltejs/kit";

import { UserMessage } from "$db/models/message.model";

export async function POST(event) {
	try {
		const formData = await event.request.formData();
		const { message, email } = Object.fromEntries(formData);

		await new UserMessage({
			message,
			email,
			createdAt: new Date(),
		}).save();

		return json({ success: true });
	} catch (e) {
		console.log(e);
		return json({ success: false });
	}
}
