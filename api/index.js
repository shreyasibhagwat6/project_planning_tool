const express = require('express')
const app = express()
const {PrismaClient } = require("@prisma/client")
const port = 3025
const cors = require('cors')

// below two middlewares needed for post request
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const prisma = new PrismaClient();

app.use(cors());

// const users = [];

// app.get('/', (req, res) => {
//   res.json(users);
// })

app.post('/auth/signup', (req, res) => {
  console.log(req.body);
  const newUser = { name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password }
  res.send(newUser);
})

// app.get('/', async (req, res) => {
//   const allUsers = await prisma.user.findMany();
//   res.json(allUsers);
// })

// app.post("/", async (req, res) => {
//   const { name, email, username, password } = req.body
//     const newUser = await prisma.user.create({ 
//       data: { 
//         name,
//         email,
//         username,
//         password
//       } 
//     });
//     const users = await prisma.user.findMany();
//     res.json(users);
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})