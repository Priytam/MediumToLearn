/**
 * Created by pjpandey on 7/30/2017.
 */
var Datastore = require('nedb');
var db;

module.exports = {
    getLike : getLike,
    like : like
};

function getLike(req, res) {
    _loadDB();
    db.find({}, _gotLikes);
    function _gotLikes(err, doc) {
        if(err) return res.status('500').send({msg : 'unable to get Likes'});
        return res.status('200').json(doc);
    }
}

function like(req, res) {
    _loadDB();
    var doc = {date : new Date(), name :  req.body.name};
    db.insert(doc, function (err, newDoc) {
        if(err) return res.status('500').json({msg : 'unable to add Likes'});
        db.find({}, _gotLikes)
    });

    function _gotLikes(err, doc) {
        if(err) return res.status('500').send({msg : 'unable to get Likes'});
        return res.status('200').json(doc);
    }
}

function _loadDB() {
    if(!db) {
        db = new Datastore({ filename: './store/like.db', autoload: true  });
    }
    return db;
}