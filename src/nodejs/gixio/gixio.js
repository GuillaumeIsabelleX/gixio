//https://github.com/GuillaumeIsabelleX/gixio
//@stcgoal Common IO packaging NodeJS Input/Output
//
const fs = require('fs');
//Write

module.exports = {
    /**Alias of writeAllText
     * 
     * @param {*} target 
     * @param {*} content 
     * @param {*} consoleLogged 
     */
    save: function (target, content, consoleLogged = true) {
        this.writeAllText(target, content, consoleLogged);
    },
    /** Write content to file
     * 
     * @param {*} target 
     * @param {*} content 
     * @param {*} consoleLogged 
     */
    writeAllText: function (target, content, consoleLogged = true) {


        if (consoleLogged)
            console.log(' Writting file : ' + target + " ...");
        // write to a new file named 2pac.txt
        fs.writeFile(target, content, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            if (consoleLogged)
                console.log('Writting completed : ' + target + " done!");


        });


    },
    /** Alias of readAllText
     * 
     * @param {*} source 
     * @param {*} callback 
     * @param {*} consoleLogged 
     */
    load: function (source, callback, consoleLogged = false) {
        readAllText(source, callback, consoleLogged);
    }
    ,
    /** Alias of readAllText
     * 
     * @param {*} source 
     * @param {*} callback 
     * @param {*} consoleLogged 
     */
    read: function (source, callback, consoleLogged = false) {
        readAllText(source, callback, consoleLogged);
    }
    ,
    /**readAllText from a file
     * 
     * @param {*} source 
     * @param {*} callback 
     * @param {*} consoleLogged 
     */
    readAllText: function (source, callback, consoleLogged = false) {
        if (consoleLogged)
            console.log("File Reading started: " + source);
        fs.readFile(source, function (err, data) {
            if (err) return console.error(err);

            if (consoleLogged)
                console.log("File Reading completing: " + source);


            callback(data.toString());

            if (consoleLogged)
                console.log("File Reading completed: " + source);

        });


        // return fs.readFile(source, (err) => {
        //     if (err) throw err;
        // });

    },
    /** Alias of appendText
     * 
     * @param {*} target 
     * @param {*} content 
     * @param {*} consoleLogged 
     */
    add: function (target, content, consoleLogged = true) {
    },
    /**appendText
     * 
     * @param {*} target 
     * @param {*} content 
     * @param {*} consoleLogged 
     */
    appendText: function (target, content, consoleLogged = true) {

        // write to a new file named 2pac.txt
        fs.appendFile(target, content, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            if (consoleLogged)
                console.log(' appended text in  ' + target + " done!");
        });


    }
};

//
//
//Read
//
//
//Append
