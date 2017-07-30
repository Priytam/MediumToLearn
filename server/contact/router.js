/**
 * Created by pjpandey on 7/30/2017.
 */
const controller = require('./mailController');

module.exports = route;

function route(app) {
    app.route('/contact/mail')
        .post(controller.sendMail)
}
