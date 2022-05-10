const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

var contactList = [
    {
        name : 'Umang',
        phone : 9625866896
    },
    {
        name : 'Akshit',
        phone : 7418520369
    }
];

app.get('/',(req,res)=>{
    res.render('contact',{
        title : 'contact',
        contact_list : contactList,
    });
});

app.post('/create-contact',(req,res)=>{
    contactList.push(req.body);
    return res.redirect('back');
});

app.get('/delete-contact/:phone',(req,res)=>{
    var phone = req.params.phone;
    let contactIndex = contactList.findIndex( contact => contact.phone==phone);
    if(contactIndex!=-1)
    contactList.splice(contactIndex,1);
    return res.redirect('/');
});

app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('server is on and running on port no : '+port);
});