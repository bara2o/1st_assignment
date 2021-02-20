var students = [];
var rIndex,
                table = document.getElementById("table");
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    let x = 20;
	var nameInputEl = document.getElementById('name');
	var idInputEl = document.getElementById('idNumber');
	var GPAInputEl = document.getElementById('GPA');


	// Validation for input
	if(inputValidation(nameInputEl.value, idInputEl.value, GPAInputEl.value)==true){
	


        // insert student
        insertStudent(nameInputEl.value, idInputEl.value, GPAInputEl.value);
        // Show success message
        showMessage('success');
    }
	

});

function inputValidation(name, id, GPA) {
	// check for the value of each element
    let x = 30;
var isEmpty = false;
	if (name == '') {
		alert('Please insert the student name');
        return;
	}

	if (id == '') {
		alert('Please insert the student id number');
        return;


	}

	if (GPA == '') {
		alert('Please insert the student GPA');
        return;


	}
    else
    return true;

}
var i=1;
function insertStudent(name, id, GPA) {
    
	var student = {
		name: name,
		idNumber: id,
		GPA: GPA,
	};
	students.push(student);
    console.log('students array: ', students);
    var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    name = document.getElementById("name").value,
    idNumber = document.getElementById("idNumber").value,
    GPA = document.getElementById("GPA").value;

cell1.innerHTML = i;
cell2.innerHTML = name;
cell3.innerHTML = idNumber;
cell4.innerHTML = GPA;
    i++;

}
function selectedRowToInput()
{
    
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          rIndex = this.rowIndex;
          document.getElementById("name").value = this.cells[1].innerHTML;
          document.getElementById("idNumber").value = this.cells[2].innerHTML;
          document.getElementById("GPA").value = this.cells[3].innerHTML;
        };
    }
}
function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
} 

			selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var name = document.getElementById("name").value,
				idNumber = document.getElementById("idNumber").value,
				GPA = document.getElementById("GPA").value;
               if(!inputValidation()){
                table.rows[rIndex].cells[1].innerHTML = name;
                table.rows[rIndex].cells[2].innerHTML = idNumber;
                table.rows[rIndex].cells[3].innerHTML = GPA;
             

              }
            }
            
			function removeSelectedRow()
            {
                table.deleteRow(rIndex);
               
                document.getElementById("name").value = "";
                document.getElementById("idNumber").value = "";
                document.getElementById("GPA").value = "";
				console.log('students array: ', students);
 
            }


// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.
