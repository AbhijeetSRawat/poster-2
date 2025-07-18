import cloudinary from "cloudinary";//! Cloudinary is being required
import dotenv from 'dotenv';
dotenv.config();

function cloudinaryConnect ()  {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});
	} catch (error) {
		console.log(error);
	}
};

export {cloudinaryConnect};