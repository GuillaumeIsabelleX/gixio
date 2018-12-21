var gixio = require('../gixio');


//gixio.writeAllText('myfile.txt', 'my content\n-----------------\n');



gixio.appendText('myfile.txt', '\n\n APPENDED');


var v = gixio.readAllText('myfile.txt', (data) => {
    console.log(data);

});
