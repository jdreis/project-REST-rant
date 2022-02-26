const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <img src="/images/404.jpeg" alt="Error 404. Could not find this page." />
      </main>
    </Def>
  );
}

module.exports = error404;
