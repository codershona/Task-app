const express = require('express')

require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')


const app = express()

const port = process.env.PORT || 3000


app.use(express.json())


app.post('/users', (req, res) => {

    // console.log(req.body)

	// res.send('testing!')

	const user = new User(req.body)

	user.save().then(() => {
		res.send(user)

	}).catch((e) => {
		res.status(400).send(e)
		// res.send(e)


	})

})


// task 2 :

app.post('/tasks', (req, res) => {
	const task = new Task(req.body)

	task.save().then(() => {
		res.send(task)

	}).catch((e) => {
		res.status(400).send(e)
	})

})




app.listen(port, () => {

	console.log('Server is up on port ' + port)


})


