const http = require('http')    //Pull in a useful node package

                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port
var mathjs = require('mathjs')
var url;
const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      console.log("Request received")
      console.log(req.url)
      // Build a fake url so we can get the search parameters using a URL object
      fake_url = "https://fake.com/path" + req.url
      url = new URL(fake_url)
      const search_params = url.searchParams
      //const value  = "data"

      console.log("Queries: " + search_params)

      if (req.method === 'GET' ) {
          console.log("Look for query parameter data: " + search_params.get("x"))

          // Process the queries here
          res.statusCode = 200      //code for OK
          //res.setHeader('Content-Type', 'number/number') 
          //res.write (mathjs.abs(parseInt("x")))
          //res.write(myFunction)
          console.log(mathjs.abs(-3))
          
          res.write("You rang?\n")
          res.write(`f(${search_params.get("x")}): ${mathjs.abs(search_params.get("x"))}`)
          //res.write(f(x))
          
      }
      else {
        console.log("Status 404")
        res.statusCode = 404;
      }
      res.end();
      
    }   
    
                          
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
  console.log(`f(${"x"}): ${mathjs.abs(-9)}`)
})