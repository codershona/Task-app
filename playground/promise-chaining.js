require('../src/db/mongoose')


const User = require('../src/models/user')



// 5f01a81a09e0d514fcaa5964


User.findByIdAndUpdate('5f01b30b424ffa174ac86e0c', { age: 1 }).then((user) => {
	console.log(user)

	return User.countDocuments({ age: 1 })

}).then((result) => {
	console.log(result)

}).catch((e) => {
	console.log(e)
})









