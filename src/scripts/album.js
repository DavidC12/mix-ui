'use strict';

class Album {
    constructor(artist, title, catalogued, data) {
        console.log("Album constructor.");
        //Since you cannot create multiple constructors for a class, 
        // we are using an optional data variable to check for the 
        // presence of a data object passed in.  Not sure if this is 
        // best practice.
        if (!data) {
            console.log("Album constructor #1");
            this.setAlbum(artist, title, catalogued);
        } else {
            console.log("Album constructor #2");
            this.setAlbum(data.artist, data.title, data.catalogued);
        }
    }

    setAlbum(artist, title, catalogued) {
        console.log("artist = " + artist);
        console.log("title = " + title);
        console.log("catalogued = " + catalogued);
        
        this.artist = artist;
        this.title = title;
        this.catalogued = catalogued;
    }
    /*
    constructor(data) {
        this.artist = data.artist;
        this.title = data.title;
        this.catalogued = data.catalogued;
    }
    */
}

Album.prototype.toString = function() {
    return (this.artist + ';' + this.title + ';Catalogued = ' + this.catalogued);
}

Album.prototype.setCatalogued = function(isCatalogued) {
    this.catalogued = isCatalogued;
    console.log("Setting catalogued to " + isCatalogued);
}

class Compilation extends Album {
    constructor(title, catalogued) {
        console.log("Compilation Constructor");
        super('Various',title,catalogued);
    }
}

module.exports = Album;
//module.exports = Compilation;  For some reason, when we call this, it is 
// executing the constructor, than on creating an album it is pushing all of 
// the parameters one variable to the right.