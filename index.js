const jsonServer = require('json-server')
const taskServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router("db.json")
const PORT = 4000 || process.env.PORT



taskServer.use(middleware)
taskServer.use(router)


taskServer.listen(PORT,()=>{
    console.log('server started at port 4000');
})