export class User {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _username: string;
  // tslint:disable-next-line:variable-name
  private _password: string;
  // tslint:disable-next-line:variable-name
  private _firstName: string;
  // tslint:disable-next-line:variable-name
  private _lastName: string;
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
  fix(id: number, username: string, password: string, firstName: string, lastName: string) {
    this._id = id;
    this._username = username;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
  }
  constructor(){
    this._id = 0;
    this._username = '';
    this._password = '';
    this._firstName = '';
    this._lastName = '';
  }

}
