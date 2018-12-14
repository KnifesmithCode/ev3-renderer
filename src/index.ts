// Built-in
const fs = require('fs');
const path = require('path');
const util = require('util');

// NPM packages
const parseString = require('xml2js').parseString;

/*
parseString(xml, function (err, result) {
    console.dir(result);
});
*/

fs.readFile(path.resolve(__dirname, '../test-files/Move1Rot.ev3p'), 'utf8', (err: Error, data: Buffer) => {
    if(err) throw err;
    parseString(data, (err: Error, result: any) => {
        var blockDiagram = result.SourceFile.Namespace[0].VirtualInstrument[0].BlockDiagram[0];
        var bounds = blockDiagram.StartBlock[0].$.Bounds.split(' ').map((x: string) => parseInt(x));
        var coords = [bounds[0] + bounds[2], bounds[1]];
        /* Array of 4 numbers
         * [x, y, x, ???]
         * The two X values are mostly the same
         * Only the first one can be negative, while the second one errors out if negative
         * The Y value is self-explainatory, and can be negative
         * I have no idea what the fourth value is
         * With some basic testing, it seems to do nothing
         * It cannot be negative, however
         */ 
        console.log('Done!');
    });
});