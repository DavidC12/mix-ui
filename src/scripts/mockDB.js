'use strict'

let mockDB = function() {
    //Private variables declared with let
    let dbHandle = ' db handle ';
    let album; //my fake one record database

    return {
        get: function() {
            console.log('function get() executed, returning ' + dbHandle + ' ' + this.album.toString());
            return this.album;
        },
        save: function(album) {
            this.album = album;
            console.log('function save() executed, ' + dbHandle + ' data = ' + this.album.toString());
        }
    }
}

module.exports = mockDB();