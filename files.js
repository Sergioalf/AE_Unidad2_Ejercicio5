var fs = require('fs')

function read(file) {
    fs.readFile(file, 'utf8',(err, data) => {
        if (err) throw err;
        formatPrint(data);
    });
}

function formatPrint (data) {
    data = data.split("\n");
    for (i = 0; i < data.length; i++) {
        a = data[i].split(",");
        console.log("#Control: " + a[0]);
        console.log("Nombre: " + a[1]);
        console.log("Calificación: " + a[2]);
        console.log("------------------------");
    }
}

module.exports.read = read;