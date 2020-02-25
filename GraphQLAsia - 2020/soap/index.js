const http = require('http');
const soap = require('soap');

const myService = {
    Example: {
        ExampleSoap: {
            Example: function(args) {
                console.log('hit and found: ', args);
                return args.userName
            },
        }
    }
}
 
const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

//http server example
const server = http.createServer(function(request,response) {
    response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/wsdl', myService, xml, function(){
    console.log('server initialized');
});

// This would be your sample request to http://localhost:8000/wsdl
{/* <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header/>
   <soapenv:Body>
      <web:Example>
         <web:userName>Lachlan</web:userName>
      </web:Example>
   </soapenv:Body>
</soapenv:Envelope> */}