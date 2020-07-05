const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true



})

// My Task:



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
	password: {
		type: String,
		required: true,
		minlength: 8,
		trim: true,
			validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error('PASSWORD CANNOT CONTAIN "password"!!!!')

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
	email: 'jennypenny@test.com  ',
	// password: 'Password123'
	password: '     12345678    '
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
		type: String,
		required: true,
		trim: true

	},
	completed: {
		type: Boolean,
		default: false
	}
})

// Task creation:

const task = new Task({

    description: ' Eat lunch finish'

	//  description: 'Learns Mongoose Libraries',

	// completed: false

})

task.save().then(() => {
	console.log(task)

}).catch((error) => {
	console.log(error)


})




