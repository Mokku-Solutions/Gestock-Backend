import mongoose from "mongoose";
import { exit } from "node:process";

export const connectDB = async () => {
	const uri = "mongodb+srv://mokkuuser:mokkupass@mokku-cluster0.e0vnj.mongodb.net/";
	return await mongoose
		.connect(uri)
		.then(() => console.log("Conexion a la base datos!!!"))
		.catch(() => {
			console.log("Epic fail");
			exit(1);
		});
};
