'use strict'

let repo = function() {
    //Private variables declared with let
    let dbHandle = ' db handle ';
    let album; //my fake one record database

    let get = function() {
        console.log('function get() executed, returning ' + dbHandle + ' ' + this.album.toString());
        return {
            name: 'new album from db'
        }
    }

    let save = function(album) {
        console.log('Saving ' + album.artist + ' to the db');
    }

    console.log('newing up album repository');
    return {
        get: get,
        save: save
    }
}

module.exports = repo();