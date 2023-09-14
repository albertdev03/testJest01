const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Read the content of your HTML file
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

// Create a DOM-like environment using jsdom
const dom = new JSDOM(html);

// Assign the window and document objects to the global scope
global.window = dom.window;
global.document = dom.window.document;

// Import CSS styles 
//require('./assets/css/styles.css');

// Example
test('El título de la página es correcto', () => {
  expect(document.title).toBe('Mi Página Web');
});


