// let students = ["An", "Duong", "Linh", "Diep"];
// function showListStudent() {
//     let html = '';
//     for (let i = 0; i < students.length; i++) {
//         html += "<tr>";
//         html += "<td>";
//         html += i + 1;
//         html += "</td>";
//         html += "<td>";
//         html += students[i];
//         html += "</td>";
//         html += "<td>";
//         html += '<button onclick="deleteStudent('+i+')">Delete</button>';
//         html += "</td>";
//         html += "</tr>";
//     }
//     document.getElementById('student-list').innerHTML = html;
// }

// showListStudent();

// function deleteStudent(i) {
//     if (confirm('are you sure?')){
//         students.splice(i, 1);
//         showListStudent();
//     }
// }
console.log('Zzzzz')
let Rectangle = function(length, width){
    this.length = length;
    this.width = width;
    
    this.getArea = function(){
        return this.length * this.width;
    }
    this.getPerimeter = function(){
        return (this.length + this.width)*2;
    }
}
