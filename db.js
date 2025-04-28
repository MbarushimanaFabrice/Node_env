const mysql=require("mysql");
const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"l4sod"
})
connection.connect((error)=>{
  if(error) throw error
  console.log("Database connected");
})
module.exports=connection;
