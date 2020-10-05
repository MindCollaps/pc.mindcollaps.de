const express = require('express');
const router = express.Router();

var clickedUsers = 0;

router.post('/api/click', async(req, res) => {
    if (req.body != undefined) {
        if (req.body.request == "1") {
            clickedUsers++;
            res.json({
                status: '200',
                response: "succes"
            });
        } else {
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            let date_ob = new Date();
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let hours = date_ob.getHours();
            let minutes = date_ob.getMinutes();
            let seconds = date_ob.getSeconds();
            var time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
            console.log(time + " " + req.method + " " + req.originalUrl + ' request from: ' + ip + " -> send wrong wrong api");
            sendError(res);
        }
    } else {
        sendError(res);
    }
});

router.get('/api/clicks', async(req, res) => {
    if (req.query != undefined) {
        res.json({
            status: '200',
            data: clickedUsers
        });
    } else {
        sendError(res);
    }
});

function sendError(res) {
    res.json({
        status: '400',
        response: "Bad Request"
    });
}

module.exports = router;