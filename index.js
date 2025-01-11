 let express=require('express');
let app=express();

app.use(express.json());
let baseUrl='/api';


let mongoose=require('mongoose');
let usercontroller=require('./controllers/users-controllers');

mongoose.connect('mongodb://localhost:27017/leave-db').then((result)=>{
    console.log('connected database leave-db successfully');
});
app.post(baseUrl+'/auth/register',usercontroller.register)
app.post(baseUrl+'/auth/logIn',usercontroller.logIn)

app.listen(3000,()=>{
console.log('server listining at port 3000');
});

// const UserController = require('./controllers/user-controllers');
// app.post(baseUrl+'/users/register',UserController.register);

