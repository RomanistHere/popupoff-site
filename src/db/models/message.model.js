import { Schema, model } from "mongoose";

const schema = new Schema(
	{
		message: {
			type: String,
			required: true,
		},
		email: String,
		createdAt: Date,
	},
	{
		timestamps: true,
	}
).index({ email: 1 });

export const UserMessage = model("UserMessage", schema);