import { json } from "@sveltejs/kit";

import { UserUninstallMessage } from "$db/models/uninstall-message.model";

export async function POST({ request }) {
	try {
		const formData = await request.formData();
		const formObj = Object.fromEntries(formData);
		const { message, email } = formObj;
		let reason = null;

		if (formObj.doesntBlock) {
			reason = "does not block";
		} else if (formObj.blocksTooMuch) {
			reason = "blocks too much";
		} else if (formObj.looks) {
			reason = "looks (design)";
		} else if (formObj.errors) {
			reason = "errors";
		} else if (formObj.other) {
			reason = "other";
		}

		await new UserUninstallMessage({
			reason,
			message,
			email,
			createdAt: new Date(),
		}).save();

		return json({ error: null });
	} catch (error) {
		return json({ error });
	}
}
