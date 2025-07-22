const http =require("http")
const url=require("url")

const server=http.createServer((req,res)=>{
    
    if(req.url=== "/"){
        res.write("Welcome to home Page")
    }

    else if(req.url=== "/about"){
        res.write("Welcome to ABOUT Page")
    }

    else if(req.url=== "/contact"){
        res.write("Welcome, you can contact me at hridyesh01@mail.com")
    }

    //echo?message=hello
    else if(req.url.startsWith("/echo")){
        
        const parsedUrl= url.parse(req.url,true);
        
        const msg=parsedUrl.query.message;

        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write(`the message is : ${msg || "Nothing"}`)

    }
    ///greet?name=Hridyesh&lang=en
    else if(req.url.startsWith("/greet")){
        //this will parse our url 
        const parsedUrl=url.parse(req.url,true)

        const name=parsedUrl.query.name||"User";
        const lang=parsedUrl.query.lang||"en";
        let message=""

        if(lang==="en"){
            message=`Hello ${name}`
        }
        else if(lang==="hindi"){
            message=`Namaste ${name}`
        }else{
            message="unsupported lang"
        }
        res.writeHead(200,{"Content-Type":"Text/plain"})
        res.write(` ${message}` )
    }

    else if(req.url="/text"){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("This is plain text response 🚀");
    }

    else if(req.url="/json"){
        const user={
            name:"Hri",
            role:"Dev"
        };
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify(user))
    }

    else if(req.method==="POST" && req.url==="/submit"){
        
        let body="";

        //receive all the data 
        req.on("data",chunk=>{
            // storing data from post request to body as string 
            body+=chunk.toString();
        })

        // when body is fully received
        req.on("end",()=>{
            try{
                // convert string back to object
                const parsedData=JSON.parse(body)
                res.writeHead(200,{"Content-Type":"application/json"});
                
                //sending response
                res.end(JSON.stringify({
                    message:"Data received Sucessfully",
                    data:parsedData
                }));

            }catch(err){
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Invalid JSON ");
            }
        })

    }

    else{
        res.write("Err 404 : PAGE NOT FOUND")
    }
    res.end();
})

server.listen(3000, () => {
  console.log("🚀 Server is running at http://localhost:3000");
});
