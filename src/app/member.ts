export class Member {


   id: number;
   name: string;
   salary: number;
   age: number;
   joinDate: Date;


   constructor( theId: number , theName: string , theSalary: number , theAge: number , theJoinDate: Date) {
      this.id = theId;
      this.name = theName;
      this.salary = theSalary;
      this.age = theAge;
      this.joinDate = theJoinDate;
   }
}
