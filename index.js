import express, { response } from "express"
import { getAllStudents, addStudent } from "./src/students.js"
// importing library
const app = express()
app.use(express.json())
// creates API
app.get("/students", getAllStudents)
app.post("/students", addStudent)
// where we tell API what to do, allowed requests
app.get("/hello", (request, response) => {
    response.send("Hello there!")
})
// commands to API
app.listen(3001, () => {
    console.log("Listening on http://localhost:3001...")
})
// starts API