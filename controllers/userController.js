require('dotenv').config();
const User = require('../models/user');
const { hash } = require('./authController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET = process.env.SECRET;
const express = require('express');
const userRouter = express.Router();

//Read
userRouter.get('/api/users', async (req, res) => {
    try {
        const foundUser = await User.find({});
        res
            .status(200)
            .json(foundUser)
    } catch(error){
        res
            .status(400)
            .json(error)
    }
})

//register
userRouter.post('/register', async (req, res) => {
    let { email, password } = req.body;
    password = hash(password);
    password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    try{
        const newUser = await User.create({email, password});
        const token = jwt.sign({email: newUser.email, id: newUser._id}, SECRET);
        res.json({
            token, 
            authorized: true, 
            username: newUser.email
        })
    } catch(error){
        res
            .status(400)
            .json(error)
    }
})


//login
userRouter.post('/login', async(req, res) => {
    let { email, password } = req.body;
    password = hash(password);
    try{
        const userQuery = User.findOne({email}).select('password email')
        const foundUser = await userQuery.exec();
        console.log(foundUser);
        if(bcrypt.compareSync(password, foundUser.password)){
            const token = jwt.sign(
                {
                    email: foundUser.email,
                    id: foundUser._id
                }, SECRET
            )
            res.status(200).json({
                token,
                authorized: true, 
                username: foundUser.email
            })
        } else {
            res.send(400).json({
                message: 'User entered incorrect Password or User Does Not Exist'
            })
        }
    } catch(error){
        console.error(error);
        res
            .status(400)
            .json(error)
    }
})

module.exports = userRouter;