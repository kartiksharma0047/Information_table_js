let a=document.querySelector("#name");
let b=document.querySelector("#email");
let btn=document.querySelector("button");
let tab=document.querySelector("table");
let x = 0;
btn.onclick = () => {
    if (x==0) {
        let headerRow = document.createElement("tr");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        th1.innerHTML = "Name";
        th2.innerHTML = "Email";
        headerRow.append(th1);
        headerRow.append(th2);
        tab.append(headerRow);
        x = 1;
    }
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerHTML = a.value;
    td2.innerHTML = b.value;
    a.value = "";
    b.value = "";
    tr.append(td1);
    tr.append(td2);
    tab.append(tr);
};






