const express = require('express')

require('./db/mongoose')

// const User = require('./models/user')
// const Task = require('./models/task')


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()

const port = process.env.PORT || 3000


// Express Middleware method 1:

// app.use((req, res, next) => {

//    // console.log(req.method, req.path)

//    // next()

//    if (req.method === 'GET') {
//       res.send('GET request are disabled!!!')

//    } else {
//       next()
//    }

// })


// setup middleware on your own, // Express Middleware method 2:

// app.use((req, res, next) => {

//    res.status(503).send('SITE IS CURRENTLY DOWN CHECK BACK SOON!!!')

// })





// old method

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)




// const router = new express.Router()

// router.get('/test', (req, res) => {

// 	res.send('This is from my other router!!!')

// })

// app.use(router)


// // deleting tasks:

// app.delete('/tasks/:id', async (req, res) => {


// 	try {

// 		const task = await Task.findByIdAndDelete(req.params.id)

// 		if (!task) {

// 			return res.status(404).send()
// 		}

// 		res.send(task)

// 	} catch (e) {

//       res.status(500).send(e)

// 	}

// })





// // task 2 :

// app.post('/tasks', async (req, res) => {
// 	const task = new Task(req.body)

// 	try {
// 		await task.save()
// 		res.status(201).send(task)

// 	} catch (e) {
// 		res.status(400).send(e)

// 	}

// 	// task.save().then(() => {
// 	// 	res.status(201).send(task)

// 	// }).catch((e) => {
// 	// 	res.status(400).send(e)
// 	// })

// })


// // Challenge 3:

// app.get('/tasks', async (req, res) => {

// 	try {
// 		const tasks = await Task.find({})
// 		res.send(tasks)

// 	} catch (e) {
//       res.status(500).send()

// 	}

// 	Task.find({}).then((tasks) => {
// 		res.send(tasks)
// 	}).catch((e) => {

// 		res.status(500).send()

// 	})
// })


// // second route:

// app.get('/tasks/:id', async (req, res) => {
// 	const _id = req.params.id

// 	try {
// 		const task = await Task.findById(_id)

// 		if (!task) {
// 			return res.status(404).send()
// 		}

// 		res.send(task)

// 	} catch (e) {
    
//     res.status(500).send()

// 	}
	

// 	// Task.findById(_id).then((task) => {
// 	// 	if (!task) {
// 	// 		return res.status(404).send()
// 	// 	}

// 	// 	res.send(task)

// 	// }).catch((e) => {
// 	// 	res.status(500).send()
// 	// })
// })


// // Resource Updating endpoints: part 2:

// app.patch('/tasks/:id', async (req,res) => {

// 	const updates = Object.keys(req.body)

// 	const allowedUpdates = ['description', 'completed']

// 	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//    if (!isValidOperation) {
//    	return res.status(400).send({ error: 'Invalid updates!!' })

//    } 

//    try {
//    	const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//      if (!task) {
//      	return res.status(404).send()
//      }

//      res.send(task)

//    } catch (e) {

//    	res.status(400).send(e)


//    }



// })





app.listen(port, () => {

	console.log('Server is up on port ' + port)


})



const jwt = require('jsonwebtoken')

// securely storing passwords:

// const bcrypt = require('bcryptjs')

const myFunction = async () => {

	 const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    // const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '0 seconds' })

	console.log(token)

   const data = jwt.verify(token, 'thisismynewcourse')
   // error: const data = jwt.verify(token, 'thisismynodecourseeee')
   console.log(data)
   
   // const password = 'Green12345!'

   // const hashedPassword = await bcrypt.hash(password, 8)


   // console.log(password)

   // console.log(hashedPassword)

   // // const isMatch = await bcrypt.compare('green12345!', hashedPassword)
   // const isMatch = await bcrypt.compare('Green12345!', hashedPassword)
   
   // console.log(isMatch)   




}

myFunction()

// jonny -> hfiuerhfuiwahwahoite4i -> jonny
// mypass -> mpoidhewkfhwenf

// 
