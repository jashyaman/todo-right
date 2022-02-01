
document.getElementById("dataButton").onclick = function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let html = "";
        let dataJson = JSON.parse(this.responseText);
        console.log(dataJson);
        let headersArr = dataJson["metadata"]["headers"];
        let headerValues = headersArr.map(elem => elem.name);
        html+="<tr>";
        for(let i=0;i<headerValues.length;i++) {
            html+="<th>"+headerValues[i]+"</th>";
        }
        html+="</tr>";
        let dataArr = dataJson["data"];
        console.log(dataArr);
        for(let i=0;i<dataArr.length;i++) {
            let row = dataArr[i];
            html+= "<tr>" +
            "<td>" + row["name"] + "</td>" +
            "<td>" + row["age"] + "</td>" +
            "<td>" + row["email"] + "</td>" +
            "</tr>";
        }
        document.getElementById("table1").innerHTML = html;
      }
      xhttp.open("GET", "http://localhost:3000/data");
      xhttp.send();
    alert("Loading data");
}