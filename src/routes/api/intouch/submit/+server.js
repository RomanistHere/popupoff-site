import { json } from "@sveltejs/kit";

import { UserMessage } from "$db/models/message.model";
import { MONGO_URL } from "$env/static/private";

export async function POST({ request }) {
	try {
		const formData = await request.formData();
		const { message, email } = Object.fromEntries(formData);

		await new UserMessage({
			message,
			email,
			createdAt: new Date(),
		}).save();

		return json({ error: null });
	} catch (error) {
		return json({ error });
	}
}

export async function GET() {
	return json({
		key: MONGO_URL
	});
}
