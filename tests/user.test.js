const request = require('supertest')

const app = require('../src/app')

const User = require('../src/models/user')

const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')

const userOneId = new mongoose.Types.ObjectId()


const userOne = {

	_id: userOneId,

	name: 'Mike',
	email: 'mike@example.com',
	password: '56what!',

	tokens: [{
		token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)


	}]

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



test('Should not login nonexistent user', async () => {

	await request(app).post('/users/login').send({

		email: userOne.email,
		password: 'thisisnotmypass'



	}).expect(400)

})


test('Should get profile for user', async () => {

	await request(app)
	.get('/users/me')
	.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	.send()
	.expect(200)

})


test('Should not get profile for unauthenticated user', async () => {
  await request(app)
  .get('/users/me')
  .send()
  .expect(401)



})




test('Should delete account for user', async () => {

	await request(app)
	.delete('/users/me')
	.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	.send()
	.expect(200)


})


test('Should not delete account for unauthenticated user', async () => {

	await request(app)
	.delete('/users/me')
	// .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	.send()
	.expect(401)


})