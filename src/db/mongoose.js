const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true



})

// defining a model

const User = mongoose.model('User', {
	name: {
       type: String,
		required: true,
		trim: true

	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,

		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('EMAIL IS INVALID!!')

			}

		}
	},
	age: {
		type: Number,
		default: 0,

		validate(value) {
			if (value < 0) {
				throw new Error('Age needs to be positive Numbers!!!')


			}

		}

	}

})

// Creating user instance of it

const me = new User({
	// name: 'Jennifer',
	name: ' JennyPenny ',
	// email: 'jennifer@'
	// email: 'jennifer@test.com'
	email: 'jennypenny@test.com  '
	// age: -1
	// age: 19
	// name: 'Jonny',
	//  age: 22
	// age: 'Mike'

})

// Saving instance to the databases:
me.save().then(() => {
   console.log(me)

}).catch((error) => {
	console.log('Error!!', error)

})

const Task = mongoose.model('Task', {
	description: {
		type: String

	},
	completed: {
		type: Boolean
	}
})

// Task creation:

// const task = new Task({

// 	description: 'Learns Mongoose Libraries',

// 	completed: false

// })

// task.save().then(() => {
// 	console.log(task)

// }).catch((error) => {
// 	console.log(error)


// })




