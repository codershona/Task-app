const express = require('express')

const User = require('../models/user')

const router = new express.Router()


// router.get('/test', (req, res) => {


// 	res.send('FROM A NEW FILE!!')


// })



// app.post('/users', async (req, res) => {
	router.post('/users', async (req, res) => {

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

// app.get('/users/:id', async (req, res) => {
	router.get('/users/:id', async (req, res) => {
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

// app.get('/users', async (req, res) => {
	router.get('/users', async (req, res) => {

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



// Resource updating Endpoints:

// app.patch('/users/:id', async (req, res) => {
	router.patch('/users/:id', async (req, res) => {


	const updates = Object.keys(req.body)

	const allowedUpdates = ['name', 'email', 'password', 'age']

	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
		// {
		// return allowedUpdates.includes(update)
      

	// })

	if (!isValidOperation) {
		return res.status(400).send({ error: 'Invalid Updates!!!' })
	}

	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

		if (!user) {
			return res.status(404).send()
		}

		res.send(user)


	} catch (e) {

		res.status(400).send(e)

	}

})



// Resource Deleting Endpoints:

// app.delete('/users/:id', async (req, res) => {
	router.delete('/users/:id', async (req, res) => {


	try {

		const user = await User.findByIdAndDelete(req.params.id)

		if (!user) {

			return res.status(404).send()
		}

		res.send(user)

	} catch (e) {

      res.status(500).send(e)

	}

})



module.exports = router