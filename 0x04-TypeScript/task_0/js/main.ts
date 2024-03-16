interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

function createStudent(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    }
}

const student1 = createStudent({ firstname: 'Nickson', lastname: "Makori", age: 32, location: "Nairobi"})
const student2 = createStudent({ firstname: 'Fatuma', lastname: "Juma", age: 22, location: "Lagos"})

const studentsList = [ student1, student2 ];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
const th = document.createElement("th");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

th.textContent = "First Name";
th1.textContent = "Last Name";
th2.textContent = "Age";
th3.textContent = "Location";

tr.appendChild(th);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);

thead.appendChild(tr);
table.appendChild(thead);

studentsList.forEach(student => {
    const trow = document.createElement("tr");
    const tdata = document.createElement("td");
    const tdata1 = document.createElement("td");
    const tdata2 = document.createElement("td");
    const tdata3 = document.createElement("td");

    tdata.textContent = student.firstname;
    tdata1.textContent = student.lastname;
    tdata2.textContent = student.age.toString();
    tdata3.textContent = student.location;

    trow.appendChild(tdata);
    trow.appendChild(tdata1);
    trow.appendChild(tdata2);
    trow.appendChild(tdata3);

    tbody.appendChild(trow);
});
table.appendChild(tbody);
document.body.appendChild(table);