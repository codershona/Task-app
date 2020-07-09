const mongoose = require('mongoose')
const validator = require('validator')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema( {
	name: {
       type: String,
		required: true,
		trim: true

	},
	email: {
		type: String,
		unique: true,
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

	},
	tokens: [{
		token: {
			type: String,
			required: true
		}
	}]

})


// Generating Authentication tokens:

userSchema.methods.generateAuthToken = async function () {
	const user = this

	const token = jwt.sign({ _id: user._id.toString() }, 'thisismynodecourse!!')
    
     user.tokens = user.token.concat({ token })
     await user.save()

	return token


}



// logging in users:


userSchema.statics.findByCredentials = async (email, password) => {

	const user = await User.findOne({ email })

	if (!user) {
		throw new Error('Unabled to LOGIN!!')
	}

	const isMatch = await bcrypt.compare(password, user.password)

	if (!isMatch) {
		throw new Error('Unabled to LOGIN!!')


	}

	return user

}


userSchema.pre('save', async function (next) {
  const user = this

  // console.log('just before saving!!!!')

  if (user.isModified('password')) {

  	user.password = await bcrypt.hash(user.password, 8)



  }

  next()

})


 const User = mongoose.model('User', userSchema)
// {
// 	name: {
//        type: String,
// 		required: true,
// 		trim: true

// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		lowercase: true,

// 		validate(value) {
// 			if (!validator.isEmail(value)) {
// 				throw new Error('EMAIL IS INVALID!!')

// 			}

// 		}
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		minlength: 8,
// 		trim: true,
// 			validate(value) {
// 			if (value.toLowerCase().includes('password')) {
// 				throw new Error('PASSWORD CANNOT CONTAIN "password"!!!!')

// 			}

// 		}


// 	},
// 	age: {
// 		type: Number,
// 		default: 0,

// 		validate(value) {
// 			if (value < 0) {
// 				throw new Error('Age needs to be positive Numbers!!!')


// 			}

// 		}

// 	}

// })

module.exports = User



