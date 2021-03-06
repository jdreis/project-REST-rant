const React = require('react');
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <h3>Currently unrated.</h3>
                <h3>No comments yet!</h3>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <br></br>
                <br></br>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>     
            </main>
        </Def>
    )
}

module.exports = show;



 