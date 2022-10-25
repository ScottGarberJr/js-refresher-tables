putTable();
function putTable() {
    let rows = 8;
    const columns = ["jan 23", "feb 23", "mar 23", "apr 23", "may 23", "jun 23", ];
    
    var div = document.querySelector('#table');
    var table = buildTable(rows, columns);
    div.appendChild(table);

    
}
function buildTable(rows, columns) {
    const tbl = document.createElement("table");
    
    for (let r = 0; r < rows; r++){
        
        let tr = document.createElement('tr');
        
        if(r == 0) {
            columns.forEach(c => {
                let header = document.createElement("th");
                header.textContent = c;
                tr.appendChild(header);
            });
            
        }
        else{
            for (let c = 0; c < columns.length; c++){
                let td = document.createElement('td');
                let input = document.createElement('input');
                input.setAttribute('id', `r-${r} c-${c}` );
                td.appendChild(input);
                tr.appendChild(td);
            }
        }
        
        tbl.appendChild(tr);
        
    }
    
    return tbl;

}
function addHeaders(columns) {
    columns.forEach(c => {
        let header = document.createElement("th");
        header.textContent = c;
        return header;
    });
}

                    
