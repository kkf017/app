
const global = require("./js/global");



/*
    https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/

    let data = {element: "barium"};

    fetch("url", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    }).then(res => {
      console.log("Request complete! response:", res);
    });

*/



(global.app).get('/', (req, res) => {
    res.render("../templates/login.hbs");  
});

(global.app).get('/signup', (req, res) => {
    res.render("../templates/signup.hbs");  
});


(global.app).get('/home/:uid', (req, res) => {
    res.render("../templates/nav-1.hbs", {uid:req.params.uid});  
});

(global.app).get('/new/:uid', (req, res) => {
    res.render("../templates/nav-3.hbs", {uid:req.params.uid});  
});

(global.app).get('/about/:uid', (req, res) => {
    res.render("../templates/nav-4.hbs", {uid:req.params.uid});  
});

(global.app).get('/home/:uid/postit/:iid', (req, res) => {
    res.render("../templates/nav-2.hbs", {uid:req.params.uid, iid:req.params.iid});  
});

