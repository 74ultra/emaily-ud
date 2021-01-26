const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)
// const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
// configuration object passed to cookieSession - expects two arguments
// - maxAge - how long cookie can exist (in milliseconds)
// - key to encrypt cookie - must be in array - multiple keys allowed - one will randomly be picked

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);
// authRoutes(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))