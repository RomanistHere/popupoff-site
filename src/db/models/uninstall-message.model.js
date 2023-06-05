import { Schema, model } from "mongoose";

const schema = new Schema(
	{
		reason: {
			type: String,
			required: true,
		},
		message: String,
		email: String,
		createdAt: Date,
	},
	{
		timestamps: true,
	}
).index({ email: 1 });

export const UserUninstallMessage = model("UserUninstallMessage", schema);
