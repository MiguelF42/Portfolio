const tbody = document.getElementById("veille-data-table");

fetch('asset/Veille technologique.xlsx')
    .then(response => response.blob())
    .then(blob => readXlsxFile(blob))
    .then((rows) => {
        for(let i = 8;i < rows.length; i ++) {
            const data = rows[i];
            const tableRow = document.createElement('tr');
            const date = new Date(data[0]);
            const inject = "<td>"+date.toDateString()+"</td>"+"<td>"+data[1]+"</td>"+"<td>"+data[4]+"</td>";
            tableRow.innerHTML = inject;
            tbody.appendChild(tableRow);
        }
    });

// readXlsxFile('asset/Veille technologique.xlsx').then((rows) => {
//     console.log(rows);1
// });