const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-rant HOME</h1>
        <div> 
          <img src="/images/sushi.jpg" alt="Image of Sushi" width='800px' />
        </div>
        <br></br>
        <a href="/places">
          <button type="button" class="btn btn-primary">Places</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
