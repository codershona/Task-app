// CRUD create read update delete 

// const mongodb = require('mongodb')

// const MongoClient = mongodb.MongoClient

// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

 const connectionURL = 'mongodb://127.0.0.1:27017'

// const connectionURL = 'mongodb://localhost:27017'

const databaseName = 'task-manager'


// const id = new ObjectID()
// console.log(id.id.length)

// console.log(id.toHexString().length)

// console.log(id.getTimestamp())



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    
    if (error) {

    	return console.log('Unable to connect to database!!!')

    }

    const db = client.db(databaseName)

// db.collection('users').findOne({ name: 'Jerry' }, (error, user) => {

    // db.collection('users').findOne({ name: 'Jenny' }, (error, user) => {
    	db.collection('users').findOne({ name: 'Jenny', age: 1 }, (error, user) => {
    	if (error) {
    		return console.log('Unabled to fetch!!')

    	}

    	console.log(user)



    })


  })

    // console.log('Connected correctly!!!')

    

    // db.collection('users').insertOne({
    	
    // 	_id: id,
    // 	name: 'Jessica',

    // 	age: 24

    // }, (error, result) => {
    // 	if (error) {
    // 		return console.log('Unable to insert user!!!')
    // 	}

    // 	console.log(result.ops)

    // 	 })




    // })

    // db.collection('users').insertMany([
    // {
    // 	name: 'Johnny',
    // 	age: 24


    //    }, {
          
    //       name: 'Jenny',
    //       age: 23

    //    }

    // ], (error, result) => {

    // 	if (error) {
    // 		return console.log('Unabled to insert Documents!!!')
    // 	}

    // 	console.log(result.ops)




    // })


    // db.collection('tasks').insertMany([

    //  {
    // 	description: 'Clean the house',
    // 	completed: true

    // },{
    // 	description: 'Renew the inspection!!!',
    // 	completed: false

    // },{
    // 	description: 'Pot Plants!!!',
    // 	completed: false

    // }


    // 	], (error, result) => {
    // 		if (error) {

    // 			return console.log('Unabled to inserts tasks!!!')

    // 		}

    // 		console.log(result.ops)


    // 	})


   // db.collection('tasks-testing').insertMany([

   //   {
   //  	description: 'Hello Node.js!!!',
   //  	completed: true

   //  },{
   //  	description: 'Working on task-manager-app!!!',
   //  	completed: false

   //  },{
   //  	description: 'Working with mongodb databases!!!',
   //  	completed: false

   //  }


   //  	], (error, result) => {
   //  		if (error) {

   //  			return console.log('Unabled to inserts tasks 4!!!')

   //  		}

   //  		console.log(result.ops)


   //  	})

