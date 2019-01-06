import { FormlyFieldConfig } from '@ngx-formly/core';

export class User {
    private _id?: String;
    private firstName?: String;
    private lastName?: String;
    private email: String;
    private password: String;
    private date?: String;
    private token?: String;

    get getId(): String {
        return this._id;
    }

    set setId(Id: String) {
        this._id = Id;
    }

    get getFirstName(): String {
        return this.firstName;
    }

    set setFirstName(firstName: String) {
        this.firstName = firstName;
    }

    get getLastName(): String {
        return this.lastName;
    }

    set setLastName(lastname: String) {
        this.lastName = lastname;
    }

    get getEmail(): String {
        return this.email;
    }

    set setEmail(email: String) {
        this.email = email;
    }

    get getPassword(): String {
        return this.password;
    }

    set setPassword(password: String) {
        this.password = password;
    }

    get getDate(): String {
        return this.date;
    }

    set setDate(date: String) {
        this.date = date;
    }

    get getToken(): String {
        return this.token;
    }

    set setToken(token: String) {
        this.token = token;
    }

    formFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'firstName',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'First name',
                  placeholder: 'First name',
                  required: true,
                },
                validation: {
                    messages: {
                        required: 'You need to provide an first name'
                    }
                }
            },
            {
                key: 'lastName',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Last name',
                  placeholder: 'Last name',
                  required: true,
                },
                validation: {
                    messages: {
                        required: 'You need to provide an last name'
                    }
                }
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Email',
                  placeholder: 'Email',
                  required: true,
                },
                validation: {
                    messages: {
                        required: 'You need to provide an email adress'
                    }
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                  type: 'password',
                  label: 'Password',
                  placeholder: 'Password',
                  required: true,
                },
                validation: {
                    messages: {
                        required: 'You need to provide a password'
                    }
                }
            },
        ];
    }
}
