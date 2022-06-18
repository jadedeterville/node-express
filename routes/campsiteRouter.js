const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
//all = catch all for http verbs 
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    // next passes control of the routing to the next relevant routing method
    // above is a callback function with args of req and res  
})
// no semi colon needed because we are chaining 

// methods have now been chained 
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
// posts carries info typically in json 
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
// 403 operation not supported 
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
// delete is a dangerous opp - need to restrict to only users with certain privileges 
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId') 
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites IDs to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.put((req, res) => {
    res.end(`Will add the campsite ID: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end('Deleting all campsites IDs');
});


module.exports = campsiteRouter;



