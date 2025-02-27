const request = require('supertest')

const app = require('../src/app')

const User = require('../src/models/user')
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')


beforeEach(setupDatabase)

// const jwt = require('jsonwebtoken')

// const mongoose = require('mongoose')

// const userOneId = new mongoose.Types.ObjectId()


// const userOne = {

// 	_id: userOneId,

// 	name: 'Mike',
// 	email: 'mike@example.com',
// 	password: '56what!',

// 	tokens: [{
// 		token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)


// 	}]

// }

// beforeEach(async () => {

	// console.log('beforeEach')

	// await User.deleteMany()

 //   await new User(userOne).save()

	// const user = new User(userOne)

	// await user.save()



// })

// afterEach(() => {

// 	console.log('afterEach')

// })



test('Should signup a new user', async () => {

   await request(app).post('/users').send({

   	name: 'John',
   	email: 'aktarshila86@gmail.com',
   	password: 'MyPass777!'


   }).expect(201)

   // Assert that the database was changed correctly

   const user = await user.findById(respone.body.user._id)

   expect(user).not.toBeNull()

   // Assertions about the response:

   expect(response.body).toMatchObject({

   	user: {
   		name: 'Johny',
   		email: 'john@example.com'


   	},
    
    token: user.tokens[0].token


   })

   expect(user.password).not.toBe('MyPass777!')


})



test('Should login exisiting user', async () => {

	// await request(app).post('/user/login').send({
	const response = await request(app).post('/user/login').send({
      
      email: 'userOne.email',
      password: 'userOne.password'
  

	}).expect(200)

	const user = await User.findById(userOneId)
	expect(response.body.token).toBe(user.tokens[1].token)

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

	// assertions:

	const user = await User.findById(userOneId)
    
    expect(user).toBeNull()

})


test('Should not delete account for unauthenticated user', async () => {

	await request(app)
	.delete('/users/me')
	// .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	.send()
	.expect(401)


})


test('Should upload avatar image', async () => {

	await request(app)
	.post('/users/me/avatar')
	.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	.attach('avatar', 'tests/fixtures/profile-pic.jpg')

	.expect(200)

	const user = await User.findById(userOneId)

	// expect({}).toBe({})
	expect(user.avatar).toBe(expect.any(Buffer))

	// 1 === 1
    
 //    {} === {}

})



test('Should update valid user fields', async () => {

	await request(app)

	 .patch('/users/me')
	 .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	 .send({
	 	name: 'Jessica'


	 })
	 .expect(200)

	 const user = await User.findById(userOneId)

	 expect(user.name).toEqual('Jessica')


})

test('Should not update invalid user fields', async () => {

	await request(app)

	 .patch('/users/me')
	 .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
	 .send({
	 	location: 'Norway'


	 })
	 .expect(400)

	 // const user = await User.findById(userOneId)

	 // expect(user.name).toEqual('Jessica')


})