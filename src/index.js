const express = require('express');
const routeUsers = require("./routes/routeUsers")
const routeMotoGP = require("./routes/routeMotoGP")
const routeMoto2 = require("./routes/routeMoto2")
const routeMoto3 = require("./routes/routeMoto3")
const routeCircuits = require("./routes/routeCircuits")
const routeTeamsMotoGP = require("./routes/routeTeamsMotoGP")
const routeTeamsMoto2 = require("./routes/routeTeamsMoto2")
const routeTeamsMoto3 = require("./routes/routeTeamsMoto3")
const PORT = process.env.PORT || 3001
const app = express();
const conectionBD = require('./lib/mongoose')
const cors = require('cors')

//Llamar funcion para conexion mongodb
conectionBD()

//middleware
app.use(cors())
app.use(express.json());
app.use('/api', routeUsers)
app.use('/api', routeMotoGP)
app.use('/api', routeMoto2)
app.use('/api', routeMoto3)
app.use('/api', routeCircuits)
app.use('/api', routeTeamsMotoGP)
app.use('/api', routeTeamsMoto2)
app.use('/api', routeTeamsMoto3)


app.get('/', (req,res)=>{
    res.send("Welcome to MotoGP API")
})


app.listen(PORT, () => console.log(`API iniciada en el puerto ${PORT}`));