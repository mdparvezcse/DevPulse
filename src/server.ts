import app from "./app"


const main = async () =>{
    app.listen(5000, ()=>{
        console.log("server is running 5000 port");
    })
}

main();