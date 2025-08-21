// Object 

const employee={
    ename: "Arvind",
    eage:40,
    address:" Meerut",
    plang:[{
        lang1:"java",
        lang2:"Python"
    },
    {
        db1:"SQL",
        db2:"Oracle"
    },
    {
        framework1:"Spring",
        framework2:"Hibernate"
    }
]
}
// Insertion
employee.company = "ABES";
//console.log(employee);
//console.log(employee.ename);
//console.log(employee.plang.lang1);
//console.log(employee.plang);
//console.log(employee.plang[0]);
//console.log(employee.plang[0].lang1);
//console.log(employee.plang[1].db1);
//console.log(employee);
employee.plang[1].db1 = "Mongo";
console.log(employee);