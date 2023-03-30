const express = require('express');
const app = express();
const mysql = require('mysql2');

//app.use(express.json());

const conn = mysql.createConnection({
             host:"localhost",
             user:"root",
             password:"root",
             database:"StudentDB"
});

conn.connect((err) => {
    if(err)
    {
        console.log(err);
    }

    console.log("Connection created successfully");
});

const f_name = ['prachi','abhay','ram','sham','seema','reema','kavita','sunakshi','aditi','seerat','shehnaz','pooja','pawan','vijay','chicku','chinu','rakesh','ravi','rahul','chirag','sid','surbhi','rita','rani','koyal','bulbul','neeraj','suraj','shani','savera','raghav','shubham','arjun','sumit','smit','sanjay','sagar','ryul','raj','rohit','kevel','sunny'];
const l_name = ['gupta','mahajan','bhan','bhat','sharma','kohli','mehra','rajput','rathid','gorr','patil','parmar','chavda','dave','yadav','mahaj','maheja','patra','petra','ghad','devi','dholkiya'];
const city = ['jammu','ladakh','kashmir','leh','daman','diu','surat','navrangpura','baramullah','kathua','samba','sidhra','nagrota','narval','mehsana','delhi','uttarpradesh','bihar','lucknow','ludhiana','south delhi','north delhi'];
const college = ['LDCE','GEC-Anand','Silver Oak','Darshan','GEC-Amedabad','GEC-rajkot','GEC-Bhavnagar','Jesus And Marry' , 'Sardar Patel','COEP','VJTI','nirma','svnit','IIT-Bombay','IIT-Madras','IIT-Jammu'];
const dob = ['2000-11-11','2000-10-12','2001-01-19','2002-08-12','2002-03-01','2000-5-16','2000-08-17','2003-03-14','2001-14','2000-11-04','2002-04-07','2000-10-06','2001-11-09','2000-11-11','2000-02-08','2000-11-13']

app.post("/student/d",(req,res) =>
{
    for(i =0;i<1500;i++)
    {
        var fnameRandom =  f_name[Math.floor(Math.random()*f_name.length)];
        var lnameRandom =  l_name[Math.floor(Math.random()*l_name.length)];
        var collegeRandom =  college[Math.floor(Math.random()*college.length)];
        var email = `${fnameRandom}${lnameRandom}${Math.floor(Math.random()*100)}@gmail.com`;
        var contact = Math.floor(7000000000+Math.floor(Math.random()*999999999));
        var cityRandom = city[Math.floor(Math.random()*city.length)];
        var dobr = dob[Math.floor(Math.random() * dob.length)];

        var sql = `insert into student_express(sd_fname,sd_lname,sd_email,sd_contact,sd_collegeid,sd_city,sd_dob) values ("${fnameRandom}","${lnameRandom}","${email}","${contact}","${collegeRandom}","${cityRandom}","${dobr}")`;


  conn.query(sql,(err,data) =>
  {
     if(err)
     {
        console.log("error");
     }
     console.log("data entered successfully");
  })
}
});
app.listen(8080);
