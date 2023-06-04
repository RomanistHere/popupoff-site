import { json } from "@sveltejs/kit";

import { DonationComment } from "$db/models/donation-comment.model";

export async function POST({ request }) {
	try {
		const formData = await request.formData();
		const { message, email } = Object.fromEntries(formData);

		await new DonationComment({
			message,
			email,
			createdAt: new Date(),
		}).save();

		return json({ error: null });
	} catch (error) {
		return json({ error });
	}
}
