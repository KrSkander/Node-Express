
var students = [ {
    id : 1,
    firstname : "someone",
    lastname : "something",
    email : "ye",
    class : "1b1"
},{
    id : 2,
    firstname : "someoneelse",
    lastname : "somethingelse",
    email : "yeye",
    class : "1b2"
}

];


const express = require('express')
const app = express()
const port = 3000

app.get('/students', (req, res) => {
  res.send(
      students
  )
})

app.post('/students',(req,res) => {
    console.log(req.body);          //use body parser  const i = require ("bodyparser") ; app.use(i())
    let newStudent = req.body;
    students.push(newStudent);
    res.sendStatus(201);
})

// app.delete('/students',(req,res)=> {
//     res.send(
//         for( var i = 0; i < students.length; i++){ 
    
//             if ( students[i].id === 5) { 
        
//                 students.splice(i, 1); 
//             }
        
//         }
//     )
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})