// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const paragraph = document.querySelector('p')
console.log(paragraph)

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id.

let firstParagraph = document.getElementById('first-paragraph')
let secondParagraph = document.getElementById('second-paragraph')
let thirdParagraph = document.getElementById('third-paragraph')
let fourthParagraph = document.getElementById('fourth-paragraph')
console.log(firstParagraph)
console.log(secondParagraph)
console.log(thirdParagraph)
console.log(fourthParagraph)

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name.

// const allParagraphs = document.querySelectorAll('p')
// console.log(allParagraphs)

// 4. Loop through the nodeList and get the text content of each paragraph.

// const allParagraphs = document.querySelectorAll('p')
// for (let i = 0; i <allParagraphs.length; i++){
//   console.log(allParagraphs[i])
// }

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph

// const allParagraphs = document.querySelectorAll('p')
// allParagraphs[3].textContent = 'Fourth Paragraph'

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

const allParagraphs = document.querySelectorAll('p')
allParagraphs[0].className = 'paragraph'
allParagraphs[0].id = 'first-paragraph'

allParagraphs[1].setAttribute('class', 'paragraph')
allParagraphs[1].setAttribute('id', 'second-paragraph')

allParagraphs[2].className = 'paragraph'
allParagraphs[2].id = 'third-paragraph'