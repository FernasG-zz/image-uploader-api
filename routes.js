const { response } = require('express');
const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: 'images/',
        filename(req, file, callback) {
            let ext = file.mimetype.split('/');
            const filename = 'photo-' + Date.now() + '.' + ext[1];

            return callback(null, filename);
        }
    })
});

module.exports = function(app) {
    async function sleep(sec) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, sec * 1000);
        })
    }

    app.post('/image', upload.single('file'), async(req, res) => {
        var path = req.file.path;

        // To test loading screen
        await sleep(5);

        console.log(path);

        res.status(201).json({
            error: false,
            code: 201,
            data: path
        });

    }, err => {
        res.status(500).json({
            error: true,
            code: 500,
            data: err
        })
    });
}