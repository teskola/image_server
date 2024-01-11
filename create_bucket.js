var minioClient = require('./configure');

minioClient.makeBucket('upload-test', function (err) {
    if (err) return console.log(err)

    console.log('Bucket created successfully.')
})