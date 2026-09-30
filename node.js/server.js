
import { PrismaClient } from './generated/prisma/client.js'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get('/usuarios/', async (req, res) => {

    const user = await prisma.user.findMany()

    res.status(200).json(user)
})

app.put('/usuarios/:id', async (req, res) => {
    
    
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json({message: 'Usuário cadastrado com sucesso'})
})


app.listen(3000)

/*

http://localhost:3000

*/