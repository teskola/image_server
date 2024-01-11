var Minio = require('minio')

require('dotenv').config();

var minioClient = new Minio.Client({
    endPoint: process.env.URL, // S3-API
    port: parseInt(process.env.PORT),
    useSSL: false, // HTTP
    accessKey: process.env.ACCESS,  // From MinIO Console
    secretKey: process.env.SECRET
});

module.exports = minioClient;