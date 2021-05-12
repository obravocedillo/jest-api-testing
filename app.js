const express = require('express');
const app = express();
const db = require('./utils/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.status(200).send("Hello there!");
})

app.get('/servers', async function(req, res){
    try {
        let dataRows = await db.many('SELECT * FROM main.servers');
        res.status(200).send(dataRows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
})

app.post('/add-server', async function(req, res){
    try {
        var name = req.body.name;
        var status = req.body.status;
        var uptime = req.body.uptime;
        var isActive = req.body.isActive;
        await db.none('INSERT INTO main.servers(name, status, uptime, isactive) values($(name), $(status), $(uptime), $(isActive))',
        {
            name,
            status,
            uptime,
            isActive
        });
        res.status(200).send('Success');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    } 
})

app.post('/change-server', async function(req, res){
    try {
        var id = req.body.id;
        var name = req.body.name;
        var status = req.body.status;
        var uptime = req.body.uptime;
        var isActive = req.body.isActive;
        await db.none('UPDATE main.servers SET name = $(name), status = $(status), uptime = $(uptime), isactive = $(isActive) WHERE id = $(id)',
        {
            id,
            name,
            status,
            uptime,
            isActive, 
        });
        res.status(200).send('Success');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    } 
})


module.exports = app;