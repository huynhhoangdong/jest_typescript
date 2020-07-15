const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./Data.xlsx', { sheet: 'ToDo' }).then((rows) => {
    console.log(rows)
    console.table(rows)

    rows.forEach(col => {
        col.forEach(data => {
            console.log(data)
            console.log(typeof data)
        });
        
    });

    // for (const i in rows) {
    //     for (const j in rows[i]) {
    //        console.log(rows[i][j])
    //     }
    // }

    // sheets.forEach(element => {
    //     console.log(element)
    // });
})