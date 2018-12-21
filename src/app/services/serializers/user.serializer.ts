import { User } from '../../models/user.model';

export class UserSerializer {
  fromJson(json: any): User {
    const user = new User();

    user._id = json._id;
    user.firstname = json.firstname;
    user.lastname = json.lastname;
    user.email = json.email;
    user.password = json.password;
    user.date = json.date;
    user.token = json.token;

    return user;
  }

  toJson(user: User): any {
    return {
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      date: user.date,
      token: user.token
    };
  }
}
