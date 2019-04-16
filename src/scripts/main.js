'use strict';
let Album = require('./album');
//let Compilation = require('./album');
let mockDB = require('./mockDB');

//Set up the mock module object
let theVerdict = new Album("Queensryche", "The Verdict", true);
console.log(theVerdict.toString());
mockDB.save(theVerdict);

//Now apply to the album
console.log("Retrieving the album we just saved from the repo...");
let x = null;
let anotherVerdict = new Album(x,x,x,mockDB.get());
console.log(anotherVerdict.toString());

/*
theVerdict.setCatalogued(false);
console.log(theVerdict.toString());
theVerdict.setCatalogued(true);
console.log(theVerdict.toString());

//Any way we can prohibit a compilation with an artist specified?  Do we care?
let dmaDance1996 = new Compilation("DMA Dance 1996", false);
console.log(dmaDance1996.toString());
dmaDance1996.setCatalogued(true);
console.log(dmaDance1996.toString());
*/
