// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach((paragraphs, i) => {
//   paragraphs.style.fontSize = '22px' 
//   paragraphs.style.color = 'violet'
//   paragraphs.style.background = 'pink'
//   paragraphs.style.border = '1px solid yellow'
// })

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

// const allParagraphs = document.querySelectorAll('p')
// allParagraphs.forEach((allParagraphs, i) => {

// if (i % 2 === 0) {
//     allParagraphs.style.color = 'green'
//   } else {
//     allParagraphs.style.color = 'red'
//   }
// })

// 3. Set text content, id and class to each paragraph

const allParagraphs = document.querySelectorAll('p')
allParagraphs[0].textContent = 'First Paragraph'
allParagraphs[1].textContent = 'Second Paragraph'
allParagraphs[2].textContent = 'Third Paragraph'
allParagraphs[3].textContent = 'Fourth Paragraph'

allParagraphs[0].className = 'paragraph'
allParagraphs[0].id = 'first-paragraph'
allParagraphs[1].className = 'paragraph'
allParagraphs[1].id = 'second-paragraph'
allParagraphs[2].className = 'paragraph'
allParagraphs[2].id = 'third-paragraph'
allParagraphs[3].className = 'paragraph'
allParagraphs[3].id = 'fourth-paragraph'
