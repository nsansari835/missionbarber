var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);

    
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}, {'Content-Type': 'text/css'}, {'Content-Type': 'text/javascript'},{'Content-Type': 'image/*'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === "/img/BIG_BIZ_ICON.png") {
        fs.readFile('./img/BIG_BIZ_ICON.png', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/Users/yonusansari/Desktop/stripe_copy/public/img/shave.jpg") {
        fs.readFile('./img/BIG_BIZ_ICON.png', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/bootstrap/css/bootstrap.min.css") {
        fs.readFile('vendor/bootstrap/css/bootstrap.min.css', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/font-awesome/css/font-awesome.min.css") {
        fs.readFile('vendor/font-awesome/css/font-awesome.min.css', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    
    else if(request.url === "/vendor/magnific-popup/magnific-popup.css") {
        fs.readFile('vendor/magnific-popup/magnific-popup.css', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/css/creative.min.css") {
        fs.readFile('css/creative.min.css', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === "/vendor/jquery/jquery.min.js") {
        fs.readFile('vendor/jquery/jquery.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/bootstrap/js/bootstrap.bundle.min.js") {
        fs.readFile('vendor/bootstrap/js/bootstrap.bundle.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/jquery-easing/jquery.easing.min.js") {
        fs.readFile('vendor/jquery-easing/jquery.easing.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/scrollreveal/scrollreveal.min.js") {
        fs.readFile('vendor/scrollreveal/scrollreveal.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/magnific-popup/jquery.magnific-popup.min.js") {
        fs.readFile('vendor/magnific-popup/jquery.magnific-popup.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/js/creative.min.js") {
        fs.readFile('js/creative.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/img/slideshow/america-architecture-buildings-755050.jpg") {
        fs.readFile('./img/slideshow/america-architecture-buildings-755050.jpg', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/img/slideshow/brooklyn-bridge-at-night_4460x4460.jpg") {
        fs.readFile('./img/slideshow/brooklyn-bridge-at-night_4460x4460.jpg', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/img/slideshow/statue-of-liberty-992552_1920.jpg") {
        fs.readFile('./img/slideshow/statue-of-liberty-992552_1920.jpg', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/img/slideshow/IMG_0890.jpg") {
        fs.readFile('./img/slideshow/IMG_0890.jpg', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/img/slideshow/IMG_0891.jpg") {
        fs.readFile('./img/slideshow/IMG_0891.jpg', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/bootstrap/js/bootstrap.bundle.min.js") {
        fs.readFile('vendor/bootstrap/js/bootstrap.bundle.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/img/header.jpg") {
        fs.readFile('./img/header.jpg', function (errors, contents){
            
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    
    else if(request.url === "/vendor/jquery-easing/jquery.easing.min.js") {
        fs.readFile('vendor/jquery-easing/jquery.easing.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/vendor/bootstrap/css/bootstrap.min.css.map") {
        fs.readFile('vendor/bootstrap/css/bootstrap.min.css.map', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === "/vendor/scrollreveal/scrollreveal.min.js") {
        fs.readFile('vendor/scrollreveal/scrollreveal.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === "/vendor/magnific-popup/jquery.magnific-popup.min.js") {
        fs.readFile('vendor/magnific-popup/jquery.magnific-popup.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/js/creative.min.js") {
        fs.readFile('js/creative.min.js', 'utf8', function (errors, contents){
            
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6788);
// print to terminal window
console.log("Running in localhost at port 6789");