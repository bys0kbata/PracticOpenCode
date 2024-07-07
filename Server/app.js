import pg from 'pg'
import express from 'express'

const PORT = process.env.PORT || 3010;
const app = express();
const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Ref',
    password: '',
    port: 5432,
})
const urlencodedParser = express.urlencoded({extended: false});
await client.connect()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
});
app.get("/getoneuser", async (req, res) => {
    try {

        const resSQL = await client.query(`SELECT * FROM "public"."Ref";`);
        res.send(resSQL.rows);
    } catch {
        res.send((500).toString());
    }
})
app.get("/", (req, res, next)=>{
    res.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"})
    res.end(`Привет, клиент. Ваш сервер работает! \n Это означает, что разработчик не криворукий(но это не точно).`);
});
app.get("/getallref", async (req,res,next)=>{
    try{
        const resSQL = await client.query(`SELECT * FROM "public"."Ref";`);
        res.send(resSQL.rows);
    }
    catch
    {
        res.send((500).toString());
    }

});
app.get("/getoneref",async (req,res,next)=>{
    try{
        const idRef = req.headers.idref;
        const resSQL = await client.query(`SELECT * FROM "public"."News" WHERE "idnews"=${idNews};`);
        res.send(resSQL.rows);
    }
    catch
    {
        res.send((500).toString());
    }
});
app.post("/createref",urlencodedParser, async (req,res,next)=>{
    try{

    } catch (error) {
        console.error(error);

    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});