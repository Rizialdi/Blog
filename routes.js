const routes = module.exports = require('next-routes')()

routes
.add('Accueil')
.add('Curriculum', '/Curriculum', 'Curriculum')
.add('user', '/user/:id', 'profile') 