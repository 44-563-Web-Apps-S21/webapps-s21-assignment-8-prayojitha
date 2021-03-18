const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port
let jokes = ["If you listen to a UNIX shell, can you hear the C?", "“Debugging” is like being the detective in a crime drama where you are also the murderer.", "If doctors were like software engineers, they would say things like “Have you tried killing yourself and being reborn?”", "The best thing about a Boolean is that even if you are wrong, you are only off by a bit.", "Why do programmers always mix up Christmas and Halloween?Because Dec 25 is Oct 31.", "An SQL query goes into a bar, walks up to two tables and asks: “Can I join you?”" ];
const random = Math.floor(Math.random() * jokes.length);

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Random Joke </title> </head>')
      res.write('<body>')
      res.write('Joke is: \n')
      res.write('<b>'+ jokes[random]+'</b> \n')
      res.end('</body></html>')
      //Close the response
    }                           
)

console.log("Random Joke", jokes[random]);

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})