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


    // const updatePromise = db.collection('users').updateOne({
    // db.collection('users').updateOne({

    // 	_id: new ObjectID("5f0058d8c2c12e1fb20947b5")


    // }, {
    
    //   // $set: {

    //   // 	name: 'Nikky'


    //   // }

    //   $inc: {
    //   	// age: -1
    //   	age: 1

    //   }

 

    // }).then((result) => {
    // 	console.log(result)

    // }).catch((error) => {
    // 	console.log(error)


    // })


    db.collection('tasks').updateMany({
    	completed: false
    }, {
    	$set: {

    		completed: true

    	}
    }).then((result) => {

    	console.log(result.modifiedCount)


    }).catch((error) => {
    	console.log(error)

    })

     })

    // updatePromise.then((result) => {
  // .then((result) => {
  //   	console.log(result)

  //   }).catch((error) => {
  //   	console.log(error)


  //   })

  //    })

// db.collection('users').findOne({ name: 'Jerry' }, (error, user) => {

    // db.collection('users').findOne({ name: 'Jenny' }, (error, user) => {
    	// db.collection('users').findOne({ name: 'Jenny', age: 1 }, (error, user) => {
// db.collection('users').findOne({ _id: "5f0058d8c2c12e1fb20947b5" }, (error, user) => {
	// db.collection('users').findOne({ _id: new ObjectID("5f0058d8c2c12e1fb20947b5") }, (error, user) => {
 //    	if (error) {
 //    		return console.log('Unabled to fetch!!')

 //    	}

 //    	console.log(user)



 //    })

    // db.collection('users').find({ age: 24 }).toArray((error, users) => {

    // 	console.log(users)

    // })

    //   db.collection('users').find({ age: 24 }).count((error, count) => {

    // 	console.log(count)

    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5f005a06572ac6205c672aa6") }, (error, task) => {
    //   console.log(task)

    // })

    //  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {

    //   console.log(tasks)

    //  })





 

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

