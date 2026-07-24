import express from "express"
import cors from "cors"


import { ENV } from "./config/env"
import { clerkMiddleware } from "@clerk/express"

import userRoutes from "./routes/userRoutes"
import productRoutes from "./routes/productRoutes"
import commentRoutes from "./routes/commentRoutes"



const app = express()



app.use(cors({ origin: ENV.FRONTEND_URL }))
app.use(clerkMiddleware()); //auth objext will be attached to the request object 
app.use(express.json())// parses JSON request bodies 
app.use(express.urlencoded({ extended: true }))


app.use("/", (req, res) => {
    res.send({ success: true })
})

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/comments", commentRoutes);

app.listen(ENV.PORT, () => {
    console.log("Server is up and listening to port ", ENV.PORT);

})
