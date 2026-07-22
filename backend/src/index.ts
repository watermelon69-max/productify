import express from "express"
import { ENV } from "./config/env"
import { clerkMiddleware } from "@clerk/express"
import cors from "cors"

const app = express()



app.use(cors({ origin: ENV.FRONTEND_URL }))
app.use(clerkMiddleware()); //auth objext will be attached to the request object 
app.use(express.json())// parses JSON request bodies 
app.use(express.urlencoded({ extended: true }))


app.use("/", (req, res) => {
    res.send({ success: true })
})

app.listen(ENV.PORT, () => {
    console.log("Server is up and listening to port ", ENV.PORT);

})
