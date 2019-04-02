import '../styles/index.scss';
import $ from 'jquery';
console.log('webpack starterkit');

let form=document.getElementById('update-album-form');
form.addEventListener('submit',event => {
    console.log("Update album form event detected");

    let albumartist = form.elements['albumartist'];
    let albumtitle = form.elements['albumtitle'];
    let artist = form.elements['artist'];
    let title = form.elements['title'];
    let length = form.elements['length'];
    let tracknum = form.elements['tracknum'];
    let version = form.elements['version'];
    let timesig = form.elements['timesig'];
    let beatmixable = form.elements['beatmixable'];
    let keystart = form.elements['keystart'];
    let keyend = form.elements['keyend'];
    let bpmstart = form.elements['bpmstart'];
    let bpmend = form.elements['bpmend'];
    let rating = form.elements['rating'];
    let category = form.elements['category'];
    let releaseyear = form.elements['releaseyear'];
    let comment = form.elements['comment'];
    
    let posting = {
        albumartist: albumartist.value,
        albumtitle: albumtitle.value,
        artist: artist.value,
        title: title.value,
        length: length.value,
        tracknum: tracknum.value,
        version: version.value,
        timesig: timesig.value,
        beatmixable: beatmixable.value,
        keystart: keystart.value,
        keyend: keyend.value,
        bpmstart: bpmstart.value,
        bpmend: bpmend.value,
        rating: rating.value,
        category: category.value,
        releaseyear: releaseyear.value,
        comment: comment.value
    };

    console.debug(posting);
    let pr = $.post('http://localhost:8089/createAlbum', posting);
    pr.then (
        data => console.log('post success',data),
        error => console.log('post error',error)
    );
    event.preventDefault();
});