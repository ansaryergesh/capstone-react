const array = [{
    "id" : '45654',
    "name": "Markdown",
    "extension": "(.md)"
  },
  {
    "name": "MultiMarkdown",
    "extension": "(.mmd, .txt)"
  }
]

const criteria = 'Markdown';
var number = 45654;
const result = array.filter(item => item.id === number.toString());

console.log('result', result);