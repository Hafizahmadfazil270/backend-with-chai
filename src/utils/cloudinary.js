import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file uploaded, ", response)
        return response
    } catch (error) {
        fs.unlink(localFilePath) // if upload operation fail, it will remove temp file store in local computer.
        return null
    }
}


// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {console.log(result); });