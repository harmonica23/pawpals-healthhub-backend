const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

// Bucket name
const bucketName = 'my-animals-bucket8';

// Function to upload a file to Google Cloud Storage
const uploadFile = async (fileBuffer, fileName) => {
    try {
        const bucket = storage.bucket(bucketName);
        const file = bucket.file(fileName);

        await file.createWriteStream().end(fileBuffer);

        console.log(`File ${fileName} uploaded successfully.`);
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

module.exports = { uploadFile };
