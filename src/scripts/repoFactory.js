'use strict';
let repofactory = function() {
        //Your object
        let repos = this();
        //Your List
        let repoList = [
            {name: 'albumRepository', source: './albumRepository'},
            {name: 'trackRepository', source: './trackRepository'}
        ];
        
        repoList.forEach(function(repoName) {
            repos[repoName.name] = require(repoName.source) ()
        });
}

//Then export
module.exports = repofactory;