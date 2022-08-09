const person = {
  name: 'Reese',
  age: 24,
  location: {
    city: 'Provo',
    temp: 97
  }
};

const { city, temp: temperature = 2} = person.location;

if (city && temperature) {
 console.log(city, temperature);
}

const book = {
  title: 'Dune',
  author: 'Frank Herbert',
  publisher: {
    //name: 'Orbit'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

const address = ['41 E 400 N', 'Provo', 'Utah', '84606'];

const [, city, state = 'yo'] = address;

console.log(`You are in ${city} ${state} `);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);