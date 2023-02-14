// set CLOUDINARY_URL=cloudinary://432637912755259:5HzYjsq6JEfC-81Mt1a-OqUCDZU@ddxezv6as
// const cloudinary = require("cloudinary").v2;
// require("dotenv").config();

// // Return "https" URLs by setting secure: true
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_KEY,
//   api_secret: process.env.CLOUD_KEY_SECRET,
// });

// const uploadImage = (filePath) => {
//   return cloudinary.uploader.upload(filePath, {
//     folder: "productsGaming",
//   });
// };

// const deleteImage = (id) => {
//   return cloudinary.uploader.destroy(id);
// };
// module.exports = { cloudinary, uploadImage, deleteImage };

// // Log the configuration
// console.log(cloudinary.config());

// /////////////////////////
// // Uploads an image file
// /////////////////////////
// const uploadImage = async (imagePath) => {
//   // Use the uploaded file's name as the asset's public ID and
//   // allow overwriting the asset with new versions
//   const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
//   };

//   try {
//     // Upload the image
//     const result = await cloudinary.uploader.upload(imagePath, options);
//     console.log(result);
//     return result.public_id;
//   } catch (error) {
//     console.error(error);
//   }
// };

// /////////////////////////////////////
// // Gets details of an uploaded image
// /////////////////////////////////////
// const getAssetInfo = async (publicId) => {
//   // Return colors in the response
//   const options = {
//     colors: true,
//   };

//   try {
//     // Get details about the asset
//     const result = await cloudinary.api.resource(publicId, options);
//     console.log(result);
//     return result.colors;
//   } catch (error) {
//     console.error(error);
//   }
// };

// //////////////////
// //
// // Main function
// //
// //////////////////
// (async () => {
//   // Set the image to upload
//   const imagePath =
//     "https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg";

//   // Upload the image
//   const publicId = await uploadImage(imagePath);

//   // Get the colors in the image
//   const colors = await getAssetInfo(publicId);

//   // Create an image tag, using two of the colors in a transformation
//   const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);

//   // Log the image tag to the console
//   console.log(imageTag);
// })();
