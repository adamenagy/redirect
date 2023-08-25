import express from "express";

let app = express();

let serverPort = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.end(`
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url='${process.env.REDIRECT_URL}'" />
  </head>
  <body>
    <p>${process.env.REDIRECT_TEXT}</p>
  </body>
</html>  
  `);
});

app.listen(serverPort);