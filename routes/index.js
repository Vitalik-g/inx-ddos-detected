const { Router } = require("express");
const route = Router();
const ssh = require('../modules/ssh').execCommand

const open = require('open');

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

route.post('/ssh',async (req,res)=>{
    console.log(req.body.data);
    ssh(res,req.body.data)
})

module.exports = route