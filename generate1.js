const express = require('express');
const app = express();
const mysql = require('mysql2');
app.set('view engine','ejs');

const conn = mysql.createConnection({
            host : "localhost",
            user: "root",
            password : "root",
            database : "Task1"
});

conn.connect((err) =>
{
    if(err)
    {
        console.log("error");
    }
    else
    {
        console.log("succeed");
    }
})



async function prachi(ans)
{
    var sl3;
    console.log(ans);
    var ans1 = `select s_id from select_combo where s_name='${ans}' `;
    await new Promise((resolve,reject) =>
    {
        conn.query(ans1,(err,data1) =>
        {
            if(err) throw err;
            console.log("data1::::::::: ",data1);
            console.log("data1::::::::: ",data1);

            console.log("data1::::::::: ",data1);
            console.log("data1::::::::: ",data1);

            console.log("data1::::::::: ",data1);

    
         var sql = `select o_value from option_combo where s_id = '${data1[0].s_id}'`;

        conn.query(sql,(err,data) =>
        {
            if(err) throw err;
            
            console.log(data);
    
            var sql2 = "";
            sql2 +=`<label>${ans}: </label>`;
            sql2 += "<br>";
            sql2 += `<select id='${ans}' name='${ans}'> `;
            for(i=0;i<data.length;i++)
            {
                sql2 += `<option value='${data[i].o_value}'>${data[i].o_value}</option>`;
               
            }
            sql2 += "</select>";
           resolve(sql2);
           sl3 = sql2;
        })
        })
    })
  return sl3;

}



    async function prachii(ans)
    {
        var sl3;
        console.log(ans);
        var ans1 = `select s_id from select_combo where s_name='${ans}' `;
        await new Promise((resolve,reject) =>
        {
            conn.query(ans1,(err,data1) =>
            {
                if(err) throw err;
                console.log(data1);
        
             var sql = `select o_value from option_combo where s_id = '${data1[0].s_id}'`;
            conn.query(sql,(err,data) =>
            {
                if(err) throw err;
                console.log(data);
        
                var sql2 = "";
                sql2 +=`<label>${ans}: </label>`;
                sql2 += "<br>";
                for(i=0;i<data.length;i++)
                {
                    sql2 += `<input type="radio" value='${data[i].o_value}' name ="ans"/>${data[i].o_value}`;
                   
                }
               resolve(sql2);
               sl3 = sql2;
            })
            })
        })
      return sl3;
    
    }

    async function prachi2(ans)
    {
        var sl3;
        console.log(ans);
        var ans1 = `select s_id from select_combo where s_name='${ans}' `;
        await new Promise((resolve,reject) =>
        {
            conn.query(ans1,(err,data1) =>
            {
                if(err) throw err;
                console.log(data1);
        
             var sql = `select o_value from option_combo where s_id = '${data1[0].s_id}'`;
            conn.query(sql,(err,data) =>
            {
                if(err) throw err;
                console.log(data);
        
                var sql2 = "";
                sql2 +=`<label>${ans}: </label>`;
                sql2 += "<br>";
                for(i=0;i<data.length;i++)
                {
                    sql2 += `<input type="checkbox" value='${data[i].o_value}'/>${data[i].o_value}    `;
                   
                }
               resolve(sql2);
               sl3 = sql2;
            })
            })
        })
      return sl3;
    
    }


    app.get('/form',async (req,res) =>
    {
         var sql =  await prachi('Gender');
         var sql1 = await prachii('Subject');
         var sql2 = await prachi2('University');
         var sql3 = await prachi('College');
         var sql4 = await prachi('Course');
         var sql5 = await prachi('Deparatment');
         var sql6 = await prachi('Relation_Status');
         var sql7 = await prachi('Location');
         var sql8 = await prachi('Result');
         var sql9 = await prachi('Language');
         
         res.render("index1.ejs",{data:sql,data1:sql1,data2:sql2,data3:sql3,data4:sql4,data5:sql5,data6:sql6,data7:sql7,data8:sql8,data9:sql9});
       
       });
       

    app.listen(6008);
            