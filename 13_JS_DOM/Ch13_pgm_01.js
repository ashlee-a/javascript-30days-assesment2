// 1. Get the first paragraph by using document.querySelector(tagname) and tag name
const firstPara = document.querySelector('p');
console.log(firstPara.textContent); // Output: First Paragraph

// 2. Get each of the paragraphs using document.querySelector('#id') and by their id
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allParas = document.querySelectorAll('p');
console.log(allParas); // Output: NodeList of all paragraphs

// 4. Loop through the nodeList and get the text content of each paragraph
allParas.forEach(para => {
  console.log(para.textContent);
});

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
para4.textContent = 'Fourth Paragraph';

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
para1.id = 'para1';
para1.className = 'paragraph';

para2.setAttribute('id', 'para2');
para2.classList.add('paragraph');

para3.id = 'para3';
para3.classList.add('paragraph');

para4.id = 'para4';
para4.classList.add('paragraph');