const request = require('supertest')

const app = require('../src/app')

const User = require('../src/models/user')


const userOne = {

	name: 'Mike',
	email: 'mike@example.com',
	password: '56what!'

}

beforeEach(async () => {

	// console.log('beforeEach')

	await User.deleteMany()

   await new User(userOne).save()

	// const user = new User(userOne)

	// await user.save()



})

// afterEach(() => {

// 	console.log('afterEach')

// })



test('Should signup a new user', async () => {

   await request(app).post('/users').send({

   	name: 'John',
   	email: 'aktarshila86@gmail.com',
   	password: 'MyPass777!'


   }).expect(201)


})



test('Should login exisiting user', async () => {

	await request(app).post('/user/login').send({
      
      email: 'userOne.email',
      password: 'userOne.password'
  

	}).expect(200)

})



test('Should npt login nonexistent user', async () => {

	await request(app).post('/users/login').send({

		email: userOne.email,
		password: 'thisisnotmypass'



	}).expect(400)

})