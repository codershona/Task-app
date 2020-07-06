// Challenge 2:


require('../src/db/mongoose')

const Task = require('../src/models/task')

// 5f01a81a09e0d514fcaa5964

// 5f01ec04920d512ef9e799a2

// Task.findByIdAndDelete('5f01b8ab793eef1ac23bff9d').then((task) => {

	Task.findByIdAndDelete('5f01ec04920d512ef9e799a2').then((task) => {
	console.log(task)
	return Task.countDocuments({ completed: false })

}).then((result) => {
	console.log(result)

}).catch((e) => {
	console.log(e)

})

