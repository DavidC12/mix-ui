'use strict';

let trackRepository = function() {
    //Private variables declared with let
    let dbHandle = ' db handle ';
    let track = null; //my fake one record database

    return {
        get: function() {
            console.log('function get() executed, returning ' + dbHandle + ' ' + this.track.toString());
            return this.track;
        },
        save: function(track) {
            this.track = track;
            console.log('function save() executed, ' + dbHandle + ' data = ' + this.track.toString());
        }
    }
}

module.exports = trackRepository();