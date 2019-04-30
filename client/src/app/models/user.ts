export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;


  constructor(username: string, firstName: string, lastName: string, email: string, password: string) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}


