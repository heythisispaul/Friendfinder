var path = require('path');
var friends = require('../app/data/friends.js');
var bodyParser = require('body-parser');


//exports this for user with server:
module.exports = function(app) {

    //returns the list of friends objects in the array:
    app.get('/api/friends?', function(req, res) {
        res.json(friends);
    });

    //when post call is made by pressing submit button, add the values from the fields to an object, that is then added to an array of objects: 
    app.post('/api/friends?', function(req, res) {
        let newScores = req.body.scores;
        for (let i = 0; i < newScores.length; i++) {
             console.log(parseInt(newScores[i]));
             //compare newScores with the array values of the values of all the other arrays of the friends.scores. 
             //The one with the smallest absolute difference will be selected and stored as a variable.
             //This index of friends that is chosen will have it's friend[i].name and friend[i].photo information pushed to the front to be displayed in the modal.
        }
        // then added to the array:
        friends.push(req.body);
    });
}