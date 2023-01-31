const { Router } = require("express");
const route = Router();
const sshDDos = require('../modules/ssh-ddos').execCommand
const sshCache = require('../modules/ssh-cache').execCommand


route.post('/grafana/update',async (req,res)=>{
    global['grafana'] = req.body.data
    res.send('good')
})
route.get('/grafana',async (req,res)=>{
    res.send(global['grafana'])
})
route.get('/',async (req,res)=>{
    res.render('index')
})

route.post('/ssh-ddos',async (req,res)=>{
    console.log(req.body.data);
    sshDDos(res,req.body.data)
})
route.post('/ssh-cache',async (req,res)=>{
    console.log(req.body.data);
    sshCache(res)
})

module.exports = route
