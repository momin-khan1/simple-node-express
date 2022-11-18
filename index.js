const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors())
app.use(express.json())

const users = [
    {
        id: 0, name: "Momin", email: "momin@gmail.com", phone: "87545746664"
    },
    {
        id: 1, name: "Khan", email: "khan@gmail.com", phone: "87545746664"
    },
    {
        id: 2, name: "joy", email: "Joy@gmail.com", phone: "87545746664"
    }
]

//Apply Post Method
app.post('/users', (req, res) => {
    console.log("Hittinng the url", req.body)
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    res.json(newUser)
    res.send("Works Properly")
})

// Quary Parameters
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})


//Dynami Id
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})


app.listen(port, () => {
    console.log("Listening The Port ", port)
})

