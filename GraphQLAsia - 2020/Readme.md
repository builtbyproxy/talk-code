<html>
    <img src="readmeAssets/conflogo.png"/>
    <h1 id="Title">How to convince your boss to use GraphQL</h1>
    <div>
        <h2>Info:</h2>
        <div style="display: flex; flex-direction: row">
            <div style="font-weight: bold; padding-right: 5px">
                Who: 
            </div>
            Lachlan Young
        </div> 
        <div style="display: flex; flex-direction: row">
            <div style="font-weight: bold; padding-right: 5px">
                What: 
            </div>
            Conference Talk
        </div> 
        <div style="display: flex; flex-direction: row">
            <div style="font-weight: bold; padding-right: 5px">
                When: 
            </div>
            February 21st 2020
        </div> 
        <div style="display: flex; flex-direction: row">
            <div style="font-weight: bold; padding-right: 5px">
                Where: 
            </div>
            GraphQL Asia Bangalore
        </div>
    </div>
    <div id="Description">
        <h2 id="subtitle">Description: </h2>
        <p>
            GraphQL is rolling out quicker and quicker as the community around it grows and improves what was once just a vision. Yet each addition to our tech stack brings with it its own core problems, most notably of which is how to replace the old? <br /><br />
            To date one of the biggest barriers to entry with a GraphQL API is the technical debt of maintaining two APIs or alternatively, the consequences of deprecating the Industry standard in its favour. <br /><br />
            Fortunately, we can look to our predecessors as this is not the first time our API standard has been challenged. Whilst GraphQL itself is intended to be a layer, connecting two sides of an intricately woven coin of routes, operations and responses. GraphQL faces the same problems REST initially did when attempting to scrub itself clean of SOAP, XML and the like. <br /><br />
            On the menu today we will be starting with a smooth overview of previous successors, followed by an in-depth comparison of working with both a Server-less private GraphQL Api. Along with a monolithic Versioned API designed for private and public consumption alike. <br /><br />
            For dessert a few war stories chased with a generous helping of philosophy around the importance of APIs and how they truly dictate the balance between success and failure of a product.<br /><br />
        </p>
    </div>
    <div id="Slides">
        <h2 id="subtitle">Slides: </h2>
        <a href="https://speakerdeck.com/builtbyproxy/how-to-convince-your-boss-to-use-graphql">
            <img src="readmeAssets/SlidePreview.png">
        </a>
    </div>
    <div id="Video">
        <h2 id="subtitle">Video: </h2>
        <a href="Not Available">
            <p>N/A</p>
            <!-- <img src="readmeAssets/SlidePreview.png"> -->
        </a>
    </div>
   <div id="codeInstructions">
        <h2 id="subtitle">How to use this code: </h2>
        <div>
            <h3>SOAP</h3>
            <ol>
                <li><code>yarn</code></li>
                <li><code>node index.js</code></li>
                <li>Head to Postman</li>
                    <ol>
                        <li>Your URL is: <a href="http://localhost:8000/wsdl">http://localhost:8000/wsdl</a>
                        </li>
                        <li>
                            Your <code>POST</code> request's <code>raw Body</code> is:
                        </li>
                   </ol>
            </ol>
<pre>&lt;soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    &lt;soapenv:Header/>
    &lt;soapenv:Body>
        &lt;web:Example>
            &lt;web:userName>Lachlan</web:userName>
        &lt;/web:Example>
    &lt;/soapenv:Body>
&lt;/soapenv:Envelope></pre>
        </div>
        <div>
            <h3>REST</h3>
            <ol>
                <li><code>yarn</code></li>
                <li><code>node index.js</code></li>
                <li>Head to Postman</li>
                <ol>
                    <li>Your URL is: <a href="http://localhost:8000/">http://localhost:8000/</a> or directly <a href="http://localhost:8000/getUser?userName=Lachlan">http://localhost:8000/getUser?userName=Lachlan</a></li>
                    <li>Your <code>GET</code> request's <code>Params</code> are:</li>
                </ol>
            </ol>
<pre>[
    {
        "key":"userName",
        "value":"Lachlans"
    }
]</pre>
        </div>
        <div>
            <h3>GraphQL</h3>
            <ol>
                <li><code>yarn</code></li>
                <li><code>node index.js</code></li>
                <li>Head to Postman</li>
                <ol>
                    <li>Your URL is: <a href="http://localhost:8000/">http://localhost:8000/</a></li>
                   <li>Your <code>POST</code> request's <code>GraphQL Body</code> is:</li>
                </ol>
            </ol>
<pre>query oneUser {
    User(userName: "Lachlan") {
        firstName
        lastName
        age
    }
}</pre>
        </div>
    </div>
</html>