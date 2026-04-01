//window.addEventListener('이벤트 종류', callback)
window.addEventListener('DOMContentLoaded', () => {
    showEmployees();
})

//1. JSON데이터 가져오기
const url = `http://127.0.0.1:5500/JavaScript/13.asyncronuos/employees.json`
const getEmployees = async () => {
    let response = await fetch(url);
    return response.json();
}


//2. HTML에 출력하기
const showEmployees = async () => {
    let employees = await getEmployees();
    console.log(employees);


    
    let output = `
    <h2>${employees.title}</h2>
    <table border=1>
        <tr>
        <th>No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        </tr>
        ${
            employees.list.map((employees,idx)=>
                `<tr>
                    <td>${idx+1}</td>
                    <td>${employees.name}</td>
                    <td>${employees.age}</td>
                    <td>${employees.department}</td>
                </tr>` 
            ).join('')
        }
    </table>

        ${employees}
    `;

    document.querySelector('#content').innerHTML = output;
}