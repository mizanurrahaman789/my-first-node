const express = require('express');
const cors = require('cors');
const { query } = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
      res.send('Hello, how are you friend')
});

const users = [
      { id: 1, name: "shabana", email: "shabana@gmail.com", phone: "01798-456320" },
      { id: 2, name: "shabiha", email: "shabiha@gmail.com", phone: "01724-4562350" },
      { id: 3, name: "somi akter", email: "somi@gmail.com", phone: "01785-456943" },
      { id: 4, name: "somaiya", email: "somaiya@gmail.com", phone: "01710-456123" },
      { id: 5, name: "shelina", email: "shelina@gmail.com", phone: "01736-456750" },
      { id: 6, name: "sabina", email: "sabina@gmail.com", phone: "01728-456320" },
      { id: 7, name: "seuli", email: "seuli@gmail.com", phone: "01728-457894" }
];

app.get('/users', (req, res) => {
      // console.log('query', req.query)
      if (req.query.name) {
            const search = req.query.name.toLowerCase();
            const matched = users.filter(user => user.name.toLowerCase().includes(search));
            res.send(matched);
      }
      else {
            res.send(users)
      }

});

app.get('/user/:id', (req, res) => {
      console.log(req.params);
      const id = parseInt(req.params.id);
      const user = users.find(u => u.id == id);
      res.send(user)
});

app.post('/users', (req, res) => {
      console.log('request', req.body);
      const user = req.body;
      user.id = users.length + 1;
      users.push(user);
      res.send(user)
});

app.get('/fruits', (req, res) => {
      res.send(['mango', 'apple', 'banana'])
});

app.get('/fruits/mango/fazle', (req, res) => {
      res.send('sour soud fazle flever')
})
app.listen(port, () => {
      console.log('listen', port)
})