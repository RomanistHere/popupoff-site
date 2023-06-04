import { json } from "@sveltejs/kit";

import { UserIssue } from "$db/models/issue.model";

export async function POST({ request }) {
	try {
		const formData = await request.formData();
		const { link, description, email } = Object.fromEntries(formData);

		await new UserIssue({
			link,
			description,
			email,
			createdAt: new Date(),
		}).save();

		return json({ error: null });
	} catch (error) {
		return json({ error });
	}
}
