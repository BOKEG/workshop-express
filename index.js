import express from "express";

const app = express()

app.set("view engine", "pug");
app.set("views" , "./views");


const PORT = 3000;
app.use(express.static('./views/style.css'));
app.use(express.json());

app.get('/',(req,res) =>{
res.render('login')

});
app.post('/login', (req,res) =>{    
    const {username,email,password} = req.body
    console.log(req.body);
});


app.listen(PORT,(req,res) =>{
    console.log('listening to port 3000')
});

