const express = require('express');
const server = express();
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const{check,validationResult} = require('express-validator');
const PORT = 3000;

server.use(cors());
//ตั้งค่า Session สำหรับะบบ
server.use(expressSession({
    secret: 'slippers.com',
    resave: false,
    saveUninitialized: true,
    cookie: { }
  }))

//ตั้งค่าการ Parse ตัวแปรเมื่อ Client ส่งข้อมูลเข้ามา
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//สร้าง Custom function
server.use(require('./configs/middleware'));

//เรียกใช้งาน routes
server.use('/api',require('./routes'));

server.get('*',(req,res) => {
    res.end('<h1>Backend server is started</h1>');
});

server.listen(PORT,()=>console.log(`Server is started, Port ${PORT}.`))