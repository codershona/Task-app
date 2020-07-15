const { calculateTip } = require('../src/math')


test('Should calculate total with tip', () => {

	const total = calculateTip(10, .3)
    
     // if (total !== 13) {

     // 	throw new Error('Total tip should be 13. Got ' + total)


     // }

     expect(total).toBe(13)


})


test('Should calculate total with default tip', () => {

	const total = calculateTip(10)

	expect(total).toBe(12.5)


})



// test('Hello baby world!', () => {

// })


// test('This shoulf fail', () => {
  
//    throw new Error('Failure!')


// })



// - Saves time
// - Creates reliable software
// - Gives flexibility to developers
// - Refactoring
// - Collaborating
// - Profiling
// - finish it