const express = require('express');
const users = require('../routes/users');
const authUser = require('../routes/authUser');
const services = require('../routes/services');
const members = require('../routes/members');
const blogs = require('../routes/blogs');
const departments = require('../routes/departments');
const teams=require('../routes/teams');
const offers = require('../routes/offers');
const events = require('../routes/events');
const reservations = require('../routes/reservations');
const myReservations = require('../routes/myReservations');
const bodyParser = require('body-parser');
const reserveOffers = require('../routes/reserveOffers');
const myReserveOffers = require('../routes/myReserveOffers');
const admins = require('../routes/admins');
const authAdmin=require('../routes/authAdmin');
const uploadImg=require('../routes/uploadImg');
const path = require('path');




module.exports=function(app){ 
    app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000,limit:'500mb'}));
    app.use(express.json());

    //API routes 
    app.use("/api/users",users);
    app.use("/api/login",authUser);
    app.use("/api/services",services);
    app.use("/api/members",members);
    app.use("/api/blogs",blogs);
    app.use("/api/departments",departments);
    app.use("/api/teams",teams);
    app.use("/api/offers",offers);
    app.use("/api/events",events);
    app.use("/api/reserve",reservations);
    app.use("/api/myReserve",myReservations);
    app.use("/api/resOffers",reserveOffers);
    app.use("/api/myOffers",myReserveOffers);
    app.use("/api/admins",admins);
    app.use("/api/authAdmin",authAdmin);
    app.use("/api/upload",uploadImg);
    app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
    

    app.use(express.static(path.join(__dirname, "../Front/build")));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../Front/build', 'index.html'));
    });

}