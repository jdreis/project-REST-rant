const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <link rel='stylesheet' href='/css/style.css' />
      </head>
      <body>
        {html.children}
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </body>
    </html>
  );
}

module.exports = Def;
