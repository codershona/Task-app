const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY)




const sendWelcomeEmail = (email, name) => {

	sgMail.send({

		to: email,
		from: 'aktarshila86@gmail.com',

		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
		// html: ''
  })

}


	const sendCancelationEmail = (email, name) => {
      
      sgMail.send({
      	to: email,
      	from: 'aktarshila86@gmail.com',
      	subject: 'Sorry to see you go',
      	text: `Good Bye, ${name}. I hope to see you back sometime soon.`
      })


	}





module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
}





// .then(res => console.log(res))
//  .catch(e => console.log(e))

// const sendGridAPIKey = 'sendgrid_jwt'




 // const sendGridAPIKey = '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';

 // sgMail.setApiKey(sendGridAPIKey)
// sgMail.setApiKey(process.env.sendGridAPIKey);
// sgMail.setApiKey("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");


// sgMail.send({

// 	to: 'aktarshila86@gmail.com',
// 	from: 'aktarshila86@gmail.com',
// 	subject: 'sendgrid test',
// 	text: 'hi'

// })




// sgMail
//   .send(msg)
//   .then(() => {
//     // Celebrate
//   })
//   .catch(error => {
//     // Log friendly error
//     console.error(error);

//     if (error.response) {
//       // Extract error msg
//       const {message, code, response} = error;

//       // Extract response msg
//       const {headers, body} = response;

//       console.error(body);
//     }
//   });

// .then(res => console.log(res))
//  .catch(e => console.log(e))
 
 // .catch(error => console.error(error.response.body))

// console.error(error.response.body)
// const msg = {
// 	to: "falgunimst95@gmail.com",
// 	from: "falgunimst95@gmail.com",
// 	subject: "testing",
// 	text: "working!!!",
// 	html: "<strong>and fhewkewfhw</strong>"
// };

// sgMail.send(msg);


