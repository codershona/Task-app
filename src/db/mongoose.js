const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true



})

// defining a model

const User = mongoose.model('User', {
	name: {
       type: String

	},
	age: {
		type: Number

	}

})

// Creating user instance of it

// const me = new User({
// 	name: 'Jonny',
// 	 age: 22
// 	// age: 'Mike'

// })

// // Saving instance to the databases:
// me.save().then(() => {
//    console.log(me)

// }).catch((error) => {
// 	console.log('Error!!', error)

// })

const Task = mongoose.model('Task', {
	description: {
		type: String

	},
	completed: {
		type: Boolean
	}
})


const task = new Task({

	description: 'Learns Mongoose Libraries',

	completed: false

})

task.save().then(() => {
	console.log(task)

}).catch((error) => {
	console.log(error)


})
