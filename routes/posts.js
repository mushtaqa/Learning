const express=require('express');

const router = express.Router();

const Post = require('../models/Post');
const connection = require('../db_config');

router.get('/',(req,res) => {
    console.log('get request');
    const sql = "select * from employee";
    connection.query(sql,function(err,result){
        if(err) {
            console.err(err.json());
            res.send('unable to get employee');
        }
        else {
            console.log('res from get post ' + result);
            res.send(result);
        }
    });
    /*try {
        //const posts = Post.find();
        //console.log('response ' + posts);
        //res.send(posts);
        Post.find(function(err,response){
            res.send({
                starus:200,posts: response
            })
        });
    } catch(err) {
        res.json({
            message : err
        });
    }*/


    //res.send('We are at posts');
});

router.post('/',(req,res) => {
    console.log('post request' + req.body.title + req.body.description );
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });
    post.save().then(
        data=> {res.json(data);})
    .catch(err=> {
        res.json({ message: err });
    });
    //res.send('We are at posts');
});

module.exports = router;