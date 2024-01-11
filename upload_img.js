var minioClient = require('./configure')

var file = 'img/checkered.png'
var metadata = {
    'Content-Type': 'images/png',
    'Test': 1234
}

minioClient.fPutObject('upload-test', "uploaded_file.png", file, metadata, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
})
