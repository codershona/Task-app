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




// Structuring a REST API:
  // (Request):
// POST /tasks HTTP/1.1
// Accept: application/json
// Connection: Keep-Alive
// Authorization: Bearer eyJhbGciOiJUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI...

// {"description": "Order new drill bits"}

// (Response):

// HTTP/1.1 201 Created 
// Date: Sun, 28 Jul 2019 15:37:37 GMT
// Server: Express
// Content-Type: application/json

// {"_id": "5c13ec6400d614654ed7e5b5", "description": "Order new drill bits", "completed": false}






