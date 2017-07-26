/**
 * Created by pjpandey on 7/24/2017.
 */
const express = require('express');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

/*
 * init app
 * */
const app = express();

/*
 * app module export
 * */

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.route('/sendMail').post(_sendMail);

const port =  process.env.PORT ||3000;
app.listen(port);
console.log("Listening on port: " + port);

function _sendMail(req, res) {
    var body = req.body;
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'madhyam.mediumtolearn@gmail.com',
            pass: 'roshni@9'
        }
    });

    var mailOptions = {
        to: 'madhyam.mediumtolearn@gmail.com',
        subject: 'This is ' + body.name + ' please go through my query and reply me asap',
        html: '<BODY><DIV align=center><TABLE style="MARGIN-LEFT: auto; WIDTH: 600px; MARGIN-RIGHT: auto" cellSpacing=0 cellPadding=0 align=center><TBODY><TR><TD style="HEIGHT: 250px; PADDING-BOTTOM: 10px; TEXT-ALIGN: left; PADDING-TOP: 75px;PADDING-LEFT: 20px; PADDING-RIGHT: 20px; WIDTH: 600px; BACKGROUND-COLOR: #fcfcfc" vAlign=top>Hi Team,<BR><BR><BR>'+ body.text +'</TD></TR><TR><TD style="HEIGHT: 175px; TEXT-ALIGN: center; MARGIN-TOP: 25px; BACKGROUND-COLOR: #2a2a2a"><SPAN style="COLOR: #c3c3c3"><U>' + body.email + '</U></SPAN><BR/><SPAN style="COLOR: #c3c3c3"> '+ body.phone +' </SPAN></TD></TR></TBODY</TABLE></DIV></BODY>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.status(500).json({error : error});
        }else{
            res.status(200).json({ data : info.response});
        }
    });
}