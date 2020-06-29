'use strict';
let repositoryFactory = require('./repoFactory');
let Album = require('./album');
let Track = require('./track');

//Creating these for testing
let testAlbum = new Album("Led Zeppelin", "IV", false);
let testTrack = new Track(null,"Black Dog","Album Version");

let album1 = new Album(repositoryFactory.albumRepository.get());
