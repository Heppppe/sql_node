let mysql = require("mysql2");
require('dotenv').config()

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'heppe',
    password: process.env.PASSWORD,
    database: 'heppe'
});

connection.connect();

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var currentDate = yyyy+"-"+mm+"-"+dd

async function getUser(name){
  const getById = new Promise((resolve, reject) => {
    connection.query("SELECT * from users WHERE name='"+name+"'", function(error, results, fields){
      if(error) throw error;
    setTimeout(() => {
      resolve(results[0])
    })
    }, 300);
  });
  getById.then((wynik) =>{console.log(wynik)})
}

function delUser(id){
  connection.query("DELETE from users WHERE uid="+id)
  connection.query("INSERT INTO usersLog (uid, timestamp, data) values ("+id+", '"+currentDate+"', 'user deleted')")
  connection.end()}

function changeUser(id, name){
  connection.query("UPDATE users SET name='"+name+"' WHERE uid="+id)
  connection.query("INSERT INTO usersLog (uid, timestamp, data) values ("+id+", '"+currentDate+"', 'user changed')")
  connection.end()
}
  

function addUser(name){
  const createUser = new Promise((resolve, reject) => {
    connection.query("INSERT INTO users(name, timestamp) values('"+name+"','"+currentDate+"')", function(error, results, fields){
      if(error) throw error;
    setTimeout(() => {
      resolve()
    })
    }, 300);
  });
  createUser.then(() =>{connection.query("INSERT INTO usersLog (uid, timestamp, data) values ((SELECT uid from users WHERE name='"+name+"'), '"+currentDate+"', 'user created')")
  connection.end()
})

}
function changePerms(name, perms){
  permsQuery = ""
  permsQuery += (perms.includes('r'))? "((SELECT uid from users WHERE name='"+name+"'), 1)" : ""
  permsQuery += (perms.length > 1)? ", " : ""
  permsQuery += (perms.includes('w'))? "((SELECT uid from users WHERE name='"+name+"'), 2)" : ""
  permsQuery += (perms.length > 2)? ", " : ""
  permsQuery += (perms.includes('x'))? "((SELECT uid from users WHERE name='"+name+"'), 3)" : ""
  addQuery = "INSERT INTO usersPerm (uid, pid) VALUES " + permsQuery
  connection.query(addQuery)

  connection.query("INSERT INTO usersLog (uid, timestamp, data) values ((SELECT uid from users WHERE name='"+name+"'), '"+currentDate+"', 'changed permissions')")
  connection.end()
}

  getUser("kupka2000");
  //delUser(11)
  //changeUser(10, "rodzinnyKoles")
  //addUser("lewuske") //dodaje nowego usera, 1 argument to nick, data ustawia sie na dzisiejsza
  //changePerms("abcit", "w")
