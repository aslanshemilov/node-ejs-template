// ./app/routing.js

/* start routing here */
module.exports = function (app) {
    // home page route (http://localhost:8080)
    // load the index.ejs file
    app.get("/", (req, res) => {
        /*
      res.render("index", {
        title: "Home Page",
        nav: [
          {
            Link: "/login",
            Text: "Login",
            Class: ""
          },
          {
            Link: "/admin",
            Text: "Admin",
            Class: ""
          }
        ]
      });*/

    // log each request to the console
    // simple logger for this router's requests
    console.log(
    "method: %s, url: %s, path: %s.",
    req.method,
    req.url,
    req.path
    );

    //response.send("Hello World!");
      
    res.status(200).send(`
            <div>
            <h1>Todo List</h1>
            <ul>
                <li style="text-decoration:line-through">Learn about Express routing</li>
                <li style="text-decoration:line-through">Create my own routes</li>
            </ul>
            </div>
        `);
        
    });

    // about page route (http://localhost:8080/about)
    app.get("/about", (req, res) => {
        var mayData = {
            "one": 1,
            "two": 2,
            "three": 3
        };
        res.render('about', {
            title: 'About Page',
            nav: [{
                Link: '/login',
                Text: 'Login',
                Class: 'nav-item',
                ClassLink: 'nav-link'
            }, {
                Link: '/admin',
                Text: 'Admin',
                Class: 'nav-item',
                ClassLink: 'nav-link'
            }],
            "mayData": mayData
        });
        //res.send("Hello World!");
    });

};
/* end routing here */

