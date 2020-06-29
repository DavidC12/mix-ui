'use strict';
let Album = require('./album');
let Track = require('./track');
let AlbumRepository = require('./albumRepository');
let TrackRepository = require('./trackRepository');

//Set up the mock module object
let theVerdict = new Album("Queensryche", "The Verdict", true);
console.log(theVerdict.toString());
AlbumRepository.save(theVerdict);

//Now apply to the album
console.log("Retrieving the album we just saved from the repo...");
let x = null;
let anotherVerdict = new Album(x,x,x,AlbumRepository.get());
console.log(anotherVerdict.toString());

//Set up a track....
let track = new Track(x, 'Blood of the Levant', 'Album Version');
console.log("Created track object = " + track.toString());

//Add it to the repository
TrackRepository.save(track);
let track2 = new Track(TrackRepository.get());



