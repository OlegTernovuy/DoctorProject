const {MongoClient,ObjectId} = require('mongodb')
const client = new MongoClient(process.env.URL)


const getPrices = async (req,res) => {
	try{
		await client.connect()
		const data = client.db('doctor').collection('prices').find()
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

const addPrice = async (req,res) => {
	try{
		if(req.body.title && req.body.price){
			const newVaccine = {_id: new ObjectId(),...req.body}
			console.log(newVaccine)
			await client.connect()
			
			const isSuccess = await client.db('doctor').collection('prices').insertOne(newVaccine)
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

const removePrice = async (req,res) => {
	try{
		const id = req.params.id
		if(id){
			await client.connect()
			client.db('doctor').collection('prices').deleteOne({_id: new ObjectId(id)},(err,result) => {
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

const editPrice = async (req,res) => {
	try{
		const id = req.params.id
		if(id){
			await client.connect()
			client.db('doctor').collection('prices')
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

module.exports = {getPrices,addPrice,removePrice,editPrice}
