/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getProfile: (req,res) =>{
        User.find({}).exec((err,user) =>{
            if(err) throw err;
            res.send(JSON.stringify(user));
        }, trace => {console.log(trace)})
        
    },
    add: (req, res) => {
        const {username} = req.body;
        User.create({username}).exec(err => {
            if(err) res.send({err : err})
            else res.send({mess : "success"})
        })
    }

};

