'use strict';

class Track {
    constructor(data, trackTitle, trackVersion) {
        if (!data) {
            console.log("Track constructor #1");
            this.setTrack(trackTitle, trackVersion);
        } else {
            console.log("Track constructor #2");
            this.setTrack(data.trackTitle, data.trackVersion);
        }
    }

    setTrack(trackTitle, trackVersion) {
        console.log("trackTitle = " + trackTitle);
        console.log("trackVersion = " + trackVersion);
        
        this.trackTitle = trackTitle;
        this.trackVersion = trackVersion;
    }
}

Track.prototype.toString = function() {
    return (this.trackTitle + ';' + this.trackVersion);
}

module.exports = Track;
