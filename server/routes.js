const { Food } = require("./models/Food")
const AWS = require('aws-sdk');
const { response } = require("express");

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


/**
 * @description Uploads an image to S3
 * @param imageName Image name
 * @param base64Image Image body converted to base 64
 * @param type Image type
 * @return string S3 image URL or error accordingly
 */
async function upload(imageName, base64Image, type) {
    const params = {
        Bucket: process.env.IMAGES_BUCKET,
        Key: imageName,
        Body: new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        ContentType: type
    };

    let data;

    try {
        data = await promiseUpload(params);
    } catch (err) {
        console.error(err);

        return "";
    }

    return data.Location;
}
/**
 * @description Promise an upload to S3
 * @param params S3 bucket params
 * @return data/err S3 response object
 */
function promiseUpload(params) {
    return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = (app) => {
    app.get('/food', async (reg, res) => {
        const food = await Food.findAll();
        res.status(200).json(food);
    });
    
    app.delete('/food', async (req, res) => {
        const name = req.body.name;
        if (!name || name.length <= 0) return res.status(400).end();
        if (await Food.destroy({ where: { name }}) <= 0) return res.status(400).end();
        res.status(200).end();
    });

    app.post('/food', async (req, res) => {
        const name = req.body.name;
        console.log(req.body.data);
        console.log(name);
        if (!name || name.length <= 0) return res.status(400).end();
        const instock = req.body.instock;
        const tags = req.body.tags;
        const base64Image = req.body.image;
        const imgName = req.body.image_name;

        let response;
        try {
            response = await upload(imgName, base64Image);
        } catch (err) {
            console.error('Error uploading image: ', err.message);
            return res.status(400).end()
        }
        await Food.create({
            name: name,
            instock: instock,
            tags: tags,
            image_path: response
        });
        res.status(200).end();
    
    });

    app.put('/food', async (req, res) => {
        const name = req.body.name;
        if (!name || name.length <= 0) return res.status(400).end();
        const id = req.param.id; 
        const instock = req.body.instock;
        const tags = req.body.tags;
        const image = req.body.image_path;
        console.log(req.body.name);
         try {
        response = await imagesService.upload(imageName, base64Image);
    } catch (err) {
        console.error('Error uploading image: ', err.message);
        return next(new Error('Error uploading image: ', imageName));
    }
        if (await Food.update({
            
            name: name, 
            instock: instock,
            tags: tags,
            image_path: image
        }, 
        {
            where: {
                id: id 
            }
        }) <= 0) return res.status(400).end();
        res.status(200).end();
        
    });
}
