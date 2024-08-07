const express = require('express');
const { Pool } = require('pg');

const PORT =  3000;
const app = express();
const client = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'Ref',
    password: '',
    port: 5432
})
const urlencodedParser = express.urlencoded({extended: false});
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
app.get("/", (req, res, next)=>{
    res.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"})
    res.end(`Привет, клиент. Ваш сервер работает! \n Это означает, что разработчик не криворукий(но это не точно).`);
});
// app.get("/user/getone", async (req, res) => {
//     try {
//
//         const resSQL = await client.query(`SELECT * FROM "public"."Ref";`);
//         res.send(resSQL.rows);
//     } catch {
//         res.send((500).toString());
//     }
// })
// app.get("/user/getlist", async (req, res) => {
//     try {
//
//         const resSQL = await client.query(`SELECT * FROM "public"."Ref" WHERE "";`);
//         res.send(resSQL.rows);
//     } catch {
//         res.send((500).toString());
//     }
// })
// app.get("/user/auth", async (req, res) => {
//     try {
//
//         const resSQL = await client.query(`SELECT * FROM "public"."Ref";`);
//         res.send(resSQL.rows);
//     } catch {
//         res.send((500).toString());
//     }
// })
// app.get("/ref/getall", async (req,res,next)=>{
//     try{
//         const resSQL = await client.query(`SELECT * FROM "public"."Ref";`);
//         res.send(resSQL.rows);
//     }
//     catch
//     {
//         res.send((500).toString());
//     }
//
// });
// app.get("/ref/getone",async (req,res,next)=>{
//     try{
//         const idRef = req.headers.idref;
//         const resSQL = await client.query(`SELECT * FROM "public"."News" WHERE "idnews"=${idNews};`);
//         res.send(resSQL.rows);
//     }
//     catch
//     {
//         res.send((500).toString());
//     }
// });
// app.post("/ref/create",urlencodedParser, async (req,res,next)=>{
//     try{
//
//     } catch (error) {
//         console.error(error);
//
//     }
// });
// app.delete("/ref/delete",urlencodedParser, async (req,res,next)=>{
//     try{
//
//     } catch (error) {
//         console.error(error);
//
//     }
// });
// app.put("/ref/put",urlencodedParser, async (req,res,next)=>{
//     try{
//
//     } catch (error) {
//         console.error(error);
//
//     }
// });
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});