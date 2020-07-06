const express = require('express')

require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')


const app = express()

const port = process.env.PORT || 3000


app.use(express.json())


app.post('/users', async (req, res) => {

    // console.log(req.body)

	// res.send('testing!')

	const user = new User(req.body)

	try {
		await user.save()
		res.status(201).send(user)

	} catch (e) {
		res.status(400).send(e)

	}

	// await user.save()

	// user.save().then(() => {
	// 	res.status(201).send(user)

	// }).catch((e) => {
	// 	res.status(400).send(e)
	// 	// res.send(e)


	// })

})

// second get handlers:

app.get('/users/:id', async (req, res) => {
	const _id = req.params.id

		try {
		const user = await User.findById(_id)
		// res.send(users)
        
        if (!user) {
        	return res.status(404).send()
        }

        res.send(user)


	} catch (e) {
      res.status(500).send()

	}



     
     // User.findById(_id).then((user) => {
     //   if (!user) {
     //   	return res.status(404).send()

     //   }

     //   res.send(user)

     // }).catch((e) => {
     // 	res.status(500).send()

     // })


	// console.log(req.params)

})





// Resource Reading Endpoints: Part 1:

app.get('/users', async (req, res) => {

	try {
		const users = await User.find({})
		res.send(users)

	} catch (e) {
      res.status(500).send()

	}

	// User.find({}).then((users) => {
	// 	res.send(users)

	// }).catch((e) => {

 //      res.status(500).send()

	// })


})


// task 2 :

app.post('/tasks', async (req, res) => {
	const task = new Task(req.body)

	try {
		await task.save()
		res.status(201).send(task)

	} catch (e) {
		res.status(400).send(e)

	}

	// task.save().then(() => {
	// 	res.status(201).send(task)

	// }).catch((e) => {
	// 	res.status(400).send(e)
	// })

})


// Challenge 3:

app.get('/tasks', async (req, res) => {

	try {
		const tasks = await Task.find({})
		res.send(tasks)

	} catch (e) {
      res.status(500).send()

	}

	Task.find({}).then((tasks) => {
		res.send(tasks)
	}).catch((e) => {

		res.status(500).send()

	})
})


// second route:

app.get('/tasks/:id', async (req, res) => {
	const _id = req.params.id

	try {
		const task = await Task.findById(_id)

		if (!task) {
			return res.status(404).send()
		}

		res.send(task)

	} catch (e) {
    
    res.status(500).send()

	}
	

	// Task.findById(_id).then((task) => {
	// 	if (!task) {
	// 		return res.status(404).send()
	// 	}

	// 	res.send(task)

	// }).catch((e) => {
	// 	res.status(500).send()
	// })
})



app.listen(port, () => {

	console.log('Server is up on port ' + port)


})


