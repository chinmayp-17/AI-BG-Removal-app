import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRoutes from './routes/userRoutes.js'
import { clerkWebhooks } from './controllers/UserController.js' 

const PORT = process.env.PORT || 4000
const app = express()

await connectDB();

app.use(cors())

app.post('/api/webhooks/clerk', express.raw({ type: 'application/json' }), clerkWebhooks)

app.use(express.json())

app.get('/', (req, res) => res.send("API Working"))
app.use('/api/user', userRoutes)

app.listen(PORT, () => console.log("Server Running on port " + PORT))

export default app;