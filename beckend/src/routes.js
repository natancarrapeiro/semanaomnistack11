const express = require('express')
const ongcontrollers = require('./controllers/Ongcontrollers')
const IncidentController= require('./controllers/IncidentController') 
const ProfileController= require('./controllers/ProfileController') 
const SessionController= require('./controllers/SessionController') 
const  routes = express.Router()

routes.post('/sessions',SessionController.create)

routes.get('/ongs',ongcontrollers.index)
routes.post('/ongs',ongcontrollers.create)

routes.get('/profile',ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete)
    module.exports  = routes