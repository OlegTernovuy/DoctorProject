require('dotenv').config()
const {check,validationResult} = require('express-validator')
const express = require('express')
const cors = require('cors')
const VaccinesController = require('./controllers/VaccinesController')
const PricesController = require('./controllers/PricesController')
const PatientsController = require('./controllers/PatientsController')
const AuthController = require('./controllers/AuthController')

const PORT = process.env.PORT || 5005

const app = express()

//MiddleWare
app.use(cors())//Відправляти запити на сервер з різних ip адрес
app.use(express.json())//з react дані приходять у форматі json


//routes
app.get('/vaccines',VaccinesController.getVaccines)

app.post('/vaccines',VaccinesController.addVaccine)

app.delete('/vaccines/:id',VaccinesController.removeVaccine)

app.put('/vaccines/:id',VaccinesController.editVaccine)


app.get('/prices',PricesController.getPrices)

app.post('/prices',PricesController.addPrice)

app.delete('/prices/:id', PricesController.removePrice)

app.put('/prices/:id',PricesController.editPrice)


app.get('/patients', PatientsController.getPatients)

app.post('/patients',PatientsController.addPatient)

app.delete('/patients/:id', PatientsController.removePatient)


app.post('/auth/registration',[
	check("username","Логін має бути не менше 3 символів").isLength({min:3,max:20}),
	check("password","Пароль має бути не менше 4 символів").isLength({min:4,max:20})
]
, AuthController.registration)

app.post('/auth/login',AuthController.login)


app.listen(PORT,() => {
}) 
