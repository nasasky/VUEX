var express = require('express');
var router = express.Router();

/* GET home page. */

const connection = require('./conn');

connection.connect(()=>{
  console.log('数据库连接成功')
})

router.post('/checklogin',(req,res) =>{
let {username,password} = req.body;

const sqlStr = "select * from users where username='"+username+"' and password='"+password+"'";

//const sqlStr = 'select * from users where username='$("#username")' '

connection.query(sqlStr,(err,data)=>{
  if(err){
    throw err;

  }else{
    res.send(data)
  }
})

 
})



module.exports = router;



/*
create table users(
  id int primary key auto_increment,
  username varchar(50),
  password varchar(50),
  realname varchar(50),
  idType varchar(50)
);



insert into users(username,password,realname,idType) values('admin','123456','张大炮','52224445555555552');
insert into users(username,password,realname,idType) values('admin','123456','胡一菲','52224445555555542');

*/