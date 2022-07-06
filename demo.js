var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["other"] = "Other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birday, email, phoneNumber) {
        this.gender = Gender.Male;
        this.fullName = fullName;
        this.gender = gender;
        this.birday = birday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
var person1 = new Employee('Nguyễn Văn A', Gender.Male, new Date('2/5/1998'), 'nguyvana@gmail.com', 90880834);
var person2 = new Employee('Nguyễn Văn B', Gender.Male, new Date('5/1/1999'), 'nguyvanb@gmail.com', 94340834);
employeeList.push(person1, person2);
var showEmployee = function (employee) { return console.log(employee); };
for (var i in employeeList) {
    showEmployee(employeeList[i]);
}
