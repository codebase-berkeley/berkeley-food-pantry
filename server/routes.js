require('dotenv').config();
const { Food } = require('./models/Food');
const { Appointment } = require('./models/Appointment');
const AWS = require('aws-sdk');
const { response } = require('express');
const passport = require('passport');
const { Sequelize, Op } = require('sequelize');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).end();
  }
};

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket: process.env.IMAGES_BUCKET,
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data);
  }
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
    Body: new Buffer.from(
      base64Image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    ),
    ContentType: type,
  };

  let data;

  try {
    data = await promiseUpload(params);
  } catch (err) {
    console.error(err);

    return '';
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
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000/login');
  });
  app.get('/check_authenticated', checkAuthenticated, async (req, res) => {
    res.status(200).end();
  });

  app.get('/food', async (req, res) => {
    const food = await Food.findAll({ order: [['updatedAt', 'DESC']] });

    res.status(200).json(food);
  });

  app.delete('/food', async (req, res) => {
    const id = req.body.id;
    if (!id) return res.status(400).end();
    if ((await Food.destroy({ where: { id } })) <= 0)
      return res.status(400).end();
    res.status(200).end();
  });

  app.post('/food', async (req, res) => {
    const name = req.body.name;
    if (!name || name.length <= 0) return res.status(400).end();
    const instock = req.body.instock;
    const tags = req.body.tags;
    const base64Image = req.body.image;
    const imgName = req.body.imgName;

    let response = '';
    if (base64Image !== '') {
      try {
        response = await upload(imgName, base64Image);
      } catch (err) {
        console.error('Error uploading image: ', err.message);
        return res.status(400).end();
      }
    }

    await Food.create({
      name: name,
      instock: instock,
      tags: tags,
      image_path: response,
    });
    res.status(200).end();
  });

  app.put('/food', async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    if (!name || name.length <= 0) return res.status(400).end();
    const id = req.body.id;
    const instock = req.body.instock;
    const tags = req.body.tags;
    const base64Image = req.body.newImage;
    const prevImage = req.body.prevImage;
    const imgName = req.body.imgName;

    let response = '';
    if (base64Image !== '' && base64Image !== prevImage) {
      try {
        response = await upload(imgName, base64Image);
      } catch (err) {
        console.error('Error uploading image: ', err.message);
        return res.status(400).end();
      }
    }

    await Food.update(
      {
        name: name,
        instock: instock,
        tags: tags,
        image_path: response,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(400).end();
    res.status(200).end();
  });

  app.get('/appointment', async (req, res) => {
    Appointment.destroy({
      where: {
        createdAt: {
          [Op.lte]: Sequelize.literal("NOW() - (INTERVAL '7 DAY')"),
        },
      },
    }).catch((e) => {
      console.log(e.message);
    });

    const appointment = await Appointment.findAll();
    res.status(200).json(appointment);
  });

  app.post('/appointment', async (req, res) => {
    const last_name = req.body.last_name;
    const first_name = req.body.first_name;
    const date = req.body.date;
    const time = req.body.time;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const visited = req.body.visited;
    const dietary_preferences = req.body.dietary_preferences;
    const item_preferences = req.body.item_preferences;
    const notes = req.body.notes;

    if (!last_name || last_name.length <= 0) return res.status(401).end();
    if (!first_name || first_name.length <= 0) return res.status(402).end();
    if (!date || date.length <= 0) return res.status(403).end();
    if (!time || time.length <= 0) return res.status(404).end();
    if (!email || email.length <= 0) return res.status(404).end();
    if (!phone_number || phone_number.length < 10) return res.status(406).end();
    if (visited == null) return res.status(407).end();

    await Appointment.create({
      last_name: last_name,
      first_name: first_name,
      date: date,
      time: time,
      email: email,
      phone_number: phone_number,
      visited: visited,
      dietary_preferences: dietary_preferences,
      item_preferences: item_preferences,
      notes: notes,
    });
    res.status(200).end();
  });

  app.put('/appointment', async (req, res) => {
    const apptID = req.body.id;
    const visitedValue = req.body.visited;

    if (visitedValue == null) return res.status(400).end();

    if (
      (await Appointment.update(
        {
          visited: visitedValue,
        },
        {
          where: { id: apptID },
        }
      )) <= 0
    )
      return res.status(400).end();

    res.status(200).end();
  });

  app.post('/appointment', async (req, res) => {
    const last_name = req.body.last_name;
    const first_name = req.body.first_name;
    const date = req.body.date;
    const time = req.body.time;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const visited = req.body.visited;
    let dietary_preferences = req.body.dietary_preferences;
    if (dietary_preferences == null) {
      dietary_preferences = '';
    }
    let item_preferences = req.body.item_preferences;
    if (item_preferences == null) {
      item_preferences = '';
    }
    const notes = req.body.notes;

    if (!last_name || last_name.length <= 0) return res.status(401).end();
    if (!first_name || first_name.length <= 0) return res.status(402).end();
    if (!date || date.length <= 0) return res.status(403).end();
    if (!time || time.length <= 0) return res.status(404).end();
    if (!email || email.length <= 0) return res.status(404).end();
    if (!phone_number || phone_number.length < 10) return res.status(406).end();
    if (visited == null) return res.status(407).end();

    await Appointment.create({
      last_name: last_name,
      first_name: first_name,
      date: date,
      time: time,
      email: email,
      phone_number: phone_number,
      visited: visited,
      dietary_preferences: dietary_preferences,
      item_preferences: item_preferences,
      notes: notes,
    });
    res.status(200).end();
  });

  const passportAuthenticate = passport.authenticate('admin-google', {
    scope: ['email', 'profile'],
    prompt: 'select_account',
    successRedirect: 'http://localhost:3000/edit-stock',
    failureRedirect: 'http://localhost:3000/login',
  });

  app.get(
    '/auth/google',
    (req, res, next) => {
      next();
    },
    passportAuthenticate
  );
};
