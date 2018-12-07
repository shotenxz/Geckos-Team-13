var db = require('../models/Users');

module.exports = {
    create(id, req, res, cb){
        db.User
            .create({"id":id})
            .then(dbModel => {
                console.log("**********Create DB Data");
                console.log(dbModel);
                res.json(dbData);
            })
            .catch(err => res.status(422).json(err));
    },
    findAll(req, res){
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbData => res.json(dbData))
            .catch(err => res.status(422).json(err));
    },
    findById(id, res){
        db.User
            .findById({"id":id})
            .then(dbData => {
                console.log("**********DB Data");
                console.log(dbData);
                res.json(dbData);
            })
            .catch(err => {
                res.status(422);
                res.json(err)
            })
    },
    find(id, req, res, cb){
        db.User
            .find({"id":id})
            .then(dbData => {
                console.log("**********DB Data");
                console.log(dbData);
                if(dbData.length < 1){
                    this.create(id, req, res, cb);
                }
                else{
                    console.log('Post to the session');
                    req.user.custom = dbData;
                    cb(req, res);
                }
            })
            .catch(err => {
                res.status(422);
                res.json(err)
            })
    },
    update(req, res){
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete(req, res){
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

