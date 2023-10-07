let submit = document.querySelector(".submit");
let save = document.querySelector(".save");
let form = document.querySelector(".formm");
let name = document.querySelector(".name_field");

let reg = document.querySelector(".reg_field");

let department = document.querySelector(".dept_field");

let teacher = document.querySelector(".teacher_field");


form.addEventListener('submit', (e) => {
    e.preventDefault();
})
submit.onclick = function () {

    form_validation();

}
function form_validation() {
    accept_data();

}
let datas = [{}];
function accept_data() {
    datas.push({
        names: name.value,
        regs: reg.value,
        deps: department.value,
        teach: teacher.value,

    })
    localStorage.setItem("datas", JSON.stringify(datas));
    console.log(datas)
    var html = "";

    document.querySelector(".A-container").innerHTML = html;

    datas.forEach(function (element, index) {


        html += `<div class="row">
<p>${element.names}</p>
<p>${element.regs}</p>
<p>${element.deps}</p>
<p>${element.teach}</p>
<div class="btns-col">
    <button class="Delete btns" onClick="dekte('${index}')">delete</button>
    <button class="Edit btns" onClick="edit('${index}')">edit</button>
</div>
</div>
    
        `;

    });

    document.querySelector(".A-container").innerHTML = html;
    name.value = ""
    reg.value = ""
    department.value = ""
    teacher.value = ""
}
function createtask() {
    let html = '';
    document.querySelector(".A-container").innerHTML = html;
    datas.forEach(function (element, index) {

        html += `<div class="row">
           <p>${element.names}</p>
           <p>${element.regs}</p>
           <p>${element.deps}</p>
           <p class="teach">${element.teach}</p>
           <div class="btns-col">
           <button class="Delete btns" onClick="dekte('${index}')">delete</button>
           <button class="Edit btns" onClick="edit('${index}')">edit</button>
           </div>
           </div>
    
        `;

    });

    document.querySelector(".A-container").innerHTML = html;
}

(() => {

    datas = JSON.parse(localStorage.getItem("datas")) || []
    createtask();

})();

function edit(index) {
    save.classList.add("active")
    name.value = datas[index].names;
    reg.value = datas[index].regs;
    department.value = datas[index].deps;
    teacher.value = datas[index].teach;
    save.onclick = function () {


        datas[index].names = name.value;
        datas[index].regs = reg.value;
        datas[index].deps = department.value;
        datas[index].teach = teacher.value;




        localStorage.setItem("datas", JSON.stringify(datas));
        createtask();

        name.value = ""
        reg.value = ""

        department.value = ""
        teacher.value = ""
    }
}
function dekte(index) {
    datas.splice(index, 1);
    localStorage.setItem("datas", JSON.stringify(datas));
    createtask();

}

