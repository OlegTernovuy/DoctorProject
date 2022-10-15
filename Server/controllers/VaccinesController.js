const {MongoClient,ObjectId} = require('mongodb')
const client = new MongoClient(process.env.URL)

const getVaccines = async (req,res) => {
	try{
		await client.connect()
		const data = client.db('doctor').collection('vaccines').find()
		data.toArray((err,result) => {
			if(result){
				res.status(200).json(result)
				client.close()
			}else{
				res.status(400).json({success:false})
				client.close()
			}
		})
	}catch(err){
		res.status(400).json({success:false})
		console.log(err)
	}
}

const addVaccine = async (req,res) => {
	try{
		if(req.body.title && req.body.price){
			const newVaccine = {_id: new ObjectId(),...req.body}
			console.log(newVaccine)
			await client.connect()
			
			const isSuccess = await client.db('doctor').collection('vaccines').insertOne(newVaccine)
			if(isSuccess.acknowledged){
				res.status(200).json({success:true})
				client.close()
			}
		
		}
	}catch(error){
		res.status(400).json({success:false})
		client.close()
		console.log(error)
	}
}

const removeVaccine = async (req,res) => {
	try{
		const id = req.params.id
		if(id){
			await client.connect()
			client.db('doctor').collection('vaccines').deleteOne({_id: new ObjectId(id)},(err,result) => {
				if(result.acknowledged){
					res.status(200).json({success:true})
					client.close()
				}else{
					res.status(400).json({success:false})
					client.close()
				}
			})
			
		}

	}catch(err){
		console.log(err)
		res.status(400).json({success:false})
	}
}

const editVaccine = async (req,res) => {
	try{
		const id = req.params.id
		console.log(id)
		if(id){
			await client.connect()
			client.db('doctor').collection('vaccines')
			.updateOne({_id:new ObjectId(id)},{$set:req.body},
			(err,result) =>{
				if(result.acknowledged){
					res.status(200).json({success:true})
					client.close()
				}else{
					res.status(400).json({success:false})
					client.close()
				}
			})
			
		}
	}catch(err){
		res.status(400).json({success:false})
		client.close()
		console.log(err)
	}
}


module.exports = {getVaccines,addVaccine,removeVaccine,editVaccine}