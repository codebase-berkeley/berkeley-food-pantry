const cors = require('cors');
const express = require('express');
const Session = require('express-session');
const { Sequelize } = require('sequelize')
const http = require('http');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth')
const cookieParser = require('cookie-parser');

const routes = require('./routes');
require('dotenv').config();
const { initFoodModel } = require('./models/Food');
const e = require('cors');

const { PORT, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const app = express();

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use(Session({
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
    secret: 'hello',
    store: Session.MemoryStore(),
    unset: 'destroy'
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use('admin-google', new GoogleStrategy.OAuth2Strategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google"
  }, (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value
    if ( email.includes('@berkeley.edu')) {
        return done(null, email);
    } else {
        return done(null, false);
    }

}))

passport.serializeUser((email, done) => {
    done(null, email)
})

passport.deserializeUser((email, done) => {
    done(null, email)
})

console.log(process.env)
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
    dialect: 'postgres'
});
initFoodModel(sequelize);
sequelize.sync();

routes(app);

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
    console.log('Berkeley Food Pantry Server listening on port ' + PORT);
});


