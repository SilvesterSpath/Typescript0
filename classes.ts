interface UserInterface{
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface{
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    
    console.log('User Created: ' + this.name + '' + this.age)
  }

  register() {
    console.log(this.name + 'is now registered')
  }

  payInvoice() {
    console.log(this.name + ' payed invoice')
  }
}

class Member extends User{
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id
  }

  payInvoice() {
    super.payInvoice()
  }
}

let Silvester = new User('SilvesterSpath', 'spath.sz@gmail.com', 45)

let mike: User = new Member(1, 'Mike Doe', 'john@gmail.com', 34)

mike.payInvoice()

