// const express = require('express')
// const app = express()
 
// const mongoose = require('mongoose')
// const dotenv =  require('dotenv')
// const morgan = require('morgan');
// const cors = require('cors')
// const cookieSession = require('cookie-session');
// const path = require('path')
// const admin = require('./server/router/admin/index')
// const employee=require('./server/router/employee')
// const payslip=require('./server/router/payslip')
// const todolist = require('./server/router/todolist')
// const leaverequest = require('./server/router/leave')
// const filedownload = require('./server/router/filedownload')
// const socket = require('./socket')

// const { isAuthenticate } = require('./server/controller/admin')

// const PORT = process.env.PORT || 5000
// dotenv.config()


// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
//   }
  
// app.use(cors())
// app.use(express.json())  
// app.use(express.urlencoded({ extended: true }))

// app.use(cookieSession({
//     maxAge:24*60*60*1000,
//     keys:[process.env.COOKEY_KEY] 
//    }))

//    app.use(express.static('public'));
//    app.use('/images',express.static('images'));

    

// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
//     console.log('mongodb connected sucessfully')

//     app.use('/static', express.static(path.join(__dirname, './server/uploads')))
 

//     app.use('/api', admin)
//     app.use('/api',employee)
//     app.use('/api',payslip)
//     app.use('/api',filedownload)
//     app.use('/api',todolist)
//     app.use('/api',leaverequest)



//     // app.use('/api', isAuthenticate, college)
//     // app.use('/api', isAuthenticate, kit)
//     // app.use('/api', isAuthenticate,  contentcreator)

// const server = app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));
 

// const io = require('socket.io')(server,{
//   pingTimeout: 60000,
//   cors: {
//     origin: "http://localhost:3000",
//     // credentials: true,
//   },
// });

// console.log("Connnection is:")

// io.on('connection', socket =>{
  
//   console.log(`User Connected : ${socket.id}` )

//   console.log(socket)
//   socket.on("sendingMessage",(data)=>{
//     console.log(data)
//   })

//   server.listen(3001,()=>{
//     console.log("SERVER IS RUNNING")
// })

 
 

// })  
// }).catch(err=>console.log(err))





const express = require("express");
const connectDB = require("./config/db");
const dotenv =  require('dotenv')
const morgan = require('morgan');
const cors = require('cors')
const cookieSession = require('cookie-session');
const path = require('path')
const admin = require('./server/router/admin/index')
const employee=require('./server/router/employee')
const payslip=require('./server/router/payslip')
const todolist = require('./server/router/todolist')
const leaverequest = require('./server/router/leave')
const client = require('./server/router/client')
const filedownload = require('./server/router/filedownload')
const credential = require('./server/router/credential')
const project = require('./server/router/project')


dotenv.config();
connectDB();
const app = express();
app.use(express.json()); 
app.use(cors())



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.COOKEY_KEY] 
   }))
   app.use(express.static('public'));
      app.use('/images',express.static('images'));

    app.use('/static', express.static(path.join(__dirname, './server/uploads')))


    app.use('/api', admin)
    app.use('/api',employee)
    app.use('/api',payslip)
    app.use('/api',filedownload)
    app.use('/api',todolist)
    app.use('/api',leaverequest)
    app.use('/api',client)
    app.use('/api',credential)
    app.use('/api',project)

  const PORT = process.env.PORT||5000;

  const server = app.listen(PORT,
  console.log(`Server running on PORT ${PORT}...`)
);

const io = require('./socket').init(server);

io.on('connection', socket =>{



  socket.emit("message", {msg:"welcome to chat bot"})

//   socket.on('message', (data)=>{
        
//             io.emit(data.orderid, data)
//  }) 

//  socket.on('vendormsg', (data)=>{
 
//       io.emit(data.orderid, data)
// })

})

// }).catch(err=>console.log(err)) 


// }
