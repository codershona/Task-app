const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
// const port = process.env.PORT || 3000
// const port = process.env.PORT

// heroku deployment: 


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })


module.exports = app




// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })



// ---- ADDING SUPPORT FOR FILE UPLOADS: -----

// const multer = require('multer')

// const upload = multer({
// 	dest: 'images',
// 	limits: {
// 		// files sizes setting:

// 		fileSize: 1000000

// 	},

// 	fileFilter(req, file, cb) {

// 		// if (!file.originalname.endsWith('.pdf')) {
// 			if (!file.originalname.match(/\.(doc|docx)$/)) {

// 			// return cb(new Error('Please Upload a PDF'))
// 			return cb(new Error('Please Upload a Word Document'))

// 		}

// 		cb(undefined, true)

// 		// cb(new Error('File must be PDF'))
// 		// cb(undefined, true)
// 		// cb(undefined, false)




// 	}


// })

// // const errorMiddleware = (req, res, next) => {
// // 	throw new Error('From my Middleware')
// // }

// // app.post('/upload', upload.single('upload'), (req, res) => {

// // app.post('/upload', errorMiddleware, (req, res) => {
// 	app.post('/upload', upload.single('upload'), (req, res) => {

// 	res.send()

// }, (error, req, res, next) => {

// 	res.status(400).send({ error: error.message })

// })





// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })




 // const Task = require('./models/task')
 // const User = require('./models/user')

 // // The user/ task relationship"

 // const main = async () => {

 // 	// const task = await Task.findById('5f084af866dcfb1981069bc9')

 // 	// await task.populate('owner').execPopulate()

 // 	// console.log(task.owner)

 // 	// console.log(task)

 //    const user = await User.findById('5f084af866dcfb1981069bc9')

 //    await user.populate('tasks').execPopulate()

 //    console.log(user.tasks)


 // }

 // main()

// hiding private data:

// const pet = {
// 	name: 'Pong'
// }

// pet.toJSON = function () {
// 	// console.log(this)
// 	// return this

// 	return {}

// }


// console.log(JSON.stringify(pet))

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()




// const express = require('express')
// require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

// const app = express()
// const port = process.env.PORT || 3000

// // app.use((req, res, next) => {
// //     if (req.method === 'GET') {
// //         res.send('GET requests are disabled')
// //     } else {
// //         next()
// //     }
// // })

// // app.use((req, res, next) => {
// //     res.status(503).send('Site is currently down. Check back soon!')
// // })

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()