enum Gender {Male='Male',Female='Female',other='Other'}

class Employee {
    fullName: string;
    gender: Gender=Gender.Male;
    birday: Date;
    email: string;
    phoneNumber?: number;

    constructor(fullName: string, gender: Gender, birday: Date, email: string, phoneNumber: number) {
        this.fullName = fullName;
        this.gender = gender;
        this.birday = birday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
let employeeList: Employee[] = [];
let person1=new Employee('Nguyễn Văn A',Gender.Male, new Date('2/5/1998'),'nguyvana@gmail.com',90880834);
let person2=new Employee('Nguyễn Văn B',Gender.Male, new Date('5/1/1999'),'nguyvanb@gmail.com',94340834);
employeeList.push(person1,person2);

let showEmployee=(employee: Employee)=>console.log(employee);
for(let i in employeeList){
   showEmployee(employeeList[i]);
}