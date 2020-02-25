const express = require('express');
const app = express();

const users = [
    {
        firstName: 'Lachlan', 
        lastName: 'Young',
        age: 23,
    }, 
    {
        firstName: 'Austin',
        lastName: 'Wilshire',
        age: 20,
    }
]

app.get('/getUser', (req, res) => {
    try {
        const { userName } = req.query

        // Check valid parameter
        if(!userName) throw new Error('Missing required parameter userName')

        const validUser = users.filter(user => user.firstName === userName);

        // Did we find a valid user?
        if(Object.keys(validUser).length === 0) throw new Error('No user found for provided parameters');
        const response = validUser;

        return res.send(response);
    } catch (err) {
        return res.status(500).send({ message: err.message});
    }
});

app.get('/getUsers', (req, res) => {
    try {
        if(Object.keys(users).length === 0) throw new Error('No users found')
        return res.send(users);
    } catch (err) {
        return res.status(500).send({ message: err.message});
    }
});

app.get('/getLegalUsers', (req, res) => {
    try {
        const eligible = users.filter((user) => user.age >= 21);
        console.log("found eligible: ", eligible);
        if(Object.keys(eligible).length === 0) throw new Error('No valid users found')
        return res.send(eligible);
    } catch (err) {
        return res.status(500).send({ message: err.message});
    }
});

app.listen(8000, () =>
  console.log(`Example app listening on port ${8000}!`),
);


