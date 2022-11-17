"use strict"

const express = require("express")

// Constants
const PORT = "8080"
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/name", (req, res) => {
	console.log(`The app returned information at ${new Date()}`)
	res.send({ name: "John" })
})

app.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`)
})
