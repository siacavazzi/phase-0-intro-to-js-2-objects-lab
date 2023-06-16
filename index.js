// Write your solution in this file!
let employee = {name:"Bob", streetAddress:"212 North 4th St"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let copy = {...employee};
    copy[key] = value;
    return copy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let copy = {...employee};
    delete copy[key];
    return {copy};
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
