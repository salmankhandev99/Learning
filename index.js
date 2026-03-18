const { config } = require('dotenv')
config()
const express = require('express')
const path = require('path')
const app = express()

// Serve static files from the "public" folder
app.use('/static', express.static(path.join(__dirname, 'public')));

const data = {
    "tenant": "ukride",
    "vehicle_id": "8",
    "source_address": "SW3 1AB, Brompton & Hans Town, Kensington and Chelsea, London (SW3 1AB)",
    "latitude": "51.496377",
    "longitude": "-0.164846",
    "dest_address": "SW2 1AB, Brixton Rush Common, Lambeth, London (SW2 1AB)",
    "dropoff_latitude": "51.453696",
    "dropoff_longitude": "-0.119332",
    "no_of_persons": "1",
    "pickup_time": "2026-03-18 19:15:00",
    "dropoff_time": "2026-03-18 19:15:00",
    "estimated_price": "41.4",
    "estimated_distance": "5.14",
    "estimated_time": "20.62",
    "luggage": "{\"Suitcase\":0,\"Hand Carry\":0}",
    "meet_greet": "0",
    "firstName": "salman",
    "lastName": "khan",
    "email": "salman0900@yopmail.com",
    "phone": "+447311122715"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data',(req,res)=>{
 res.json(data)
})

app.get('/about',(req,res)=>{
 res.send('This is about page')
})


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})