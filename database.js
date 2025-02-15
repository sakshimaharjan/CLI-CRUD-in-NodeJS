var mysql = require('mysql')

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "training"
});

// conn.connect(function(err){
//     if (err) throw err;
//     console.log("Connection successful")
//     var sql = "INSERT INTO user(name,email) VALUES ('Aayush','contact@aayushshrestha.com')";
//     conn.query(sql, function(err, result){
//         if(err) throw err;
//         console.log("Record added successfully")
//     }) 
// });

conn.connect(function(err){
    if (err) throw err;
    console.log("Connection successful")
    var sql = "SELECT * FROM user";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log(result)
    }) 
});


