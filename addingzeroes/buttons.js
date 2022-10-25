function submit(){

}

function addZeroes(){
    let col = 0;
    let row = 1;
    do{
        
        let cell = document.getElementById(`r-${row} c-${col}`);

        if (cell.value == "" || cell.value == null){
            cell.value = "0";
        }
        row++;
    }
    while(row < 8);
}