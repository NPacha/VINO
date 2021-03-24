require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const { hash, auth } = require('./controllers/authController');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const wineController = require('./controllers/wines');
const userController = require('./controllers/userController');


const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on('open', () => {
    console.log('Mongo is Connected');
});
/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development'){
  app.use(express.static('public'))
}

/* Controller Goes Here Remove the test*/
app.get('/test', (req, res)=>{
	res.status(200).json({
		website: 'My Website',
		info: 'Not that much'
	})
})
app.use('/api/wines', wineController); //this is the end point for the wine controller, this is the connection to the database
app.use('/', userController);
/* Controller Ends here */
//LISTENER


// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});



