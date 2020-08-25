


const request = require('request');
var express = require('express')
var router = express.Router()

router.post('/allelements', async (req, res) => {
    const body = req.body;
    //var ip = req.connection.remoteAddress.split(":")[((req.connection.remoteAddress.split(":")).length)-1]
    try {
        //const params = body && body.params ? body.params : null;
        //console.log("frontendRoutes received("+ip+"): ","PARAMS", params);
        //Utilities.log("frontendRoutes received("+ip+"): " + "PARAMS " + params);
        
        console.log("Ricevuto --> " + body.params)
        //frontendService.GetAllElements();

        res.status(HttpStatus.OK).send();
    } catch (error) {
        res.status(HttpStatus.OK).send(error);
    }
});

module.exports = router;