const {MongoClient,ObjectId} = require('mongodb')
const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const generateAccessToken = require('../utils/generateAccessToken')

const client = new MongoClient(process.env.URL)

const registration = async (req,res) => {
	try{
		const errors = validationResult(req)
		if(!errors.isEmpty()){
			return res.status(200).json({message:'Помилка при реєстрації',errors})
		}
		if(req.body.username && req.body.password){
			await client.connect()
			const {username,password} = req.body
			const candidate = await client.db('doctor').collection('users').findOne({username})
			if(candidate){
				client.close()
				return res.status(400).json({message:"Користувач с таким ім'ям вже існує ",success:false})
			}
			const salt = 10;
			const hashPass = bcrypt.hashSync(password,salt)
			const user = new User({username:username,password:hashPass,role:'user'})
			client.db('doctor').collection('users').insertOne(user)
			return res.status(200).json({status:true,message:'Користувач успішно створений',user:{username:user.username,id:user._id}})
		}

	}catch(err){
		res.status(400).json({success:false})
		console.log(err)
	}
}

const login = async (req,res) => {
	try{
		await client.connect()
		const {username,password} = req.body
		const user = await client.db('doctor').collection('users').findOne({username})
		if(!user){
			client.close()
			return res.status(400).json({success:false,message:"Неправильний логін або пароль"})
		}
		const isValidPasword = bcrypt.compareSync(password,user.password)
		if(!isValidPasword){
			client.close()
			return res.status(400).json({success:false,message:"Неправильний логін або пароль"})
		}

		client.close()
		const token = generateAccessToken(user._id,user.role)
		return res.status(200).json({success:true,user:{username:user.username,id:user._id,role:user.role,token}})

	}catch(err){
		console.log(err)
	}
}

module.exports = {login,registration}