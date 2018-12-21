import { FormlyFieldConfig } from '@ngx-formly/core';

export class User {
    private _idUser?: String;
    private firstnameUser?: String;
    private lastnameUser?: String;
    private emailUser: String;
    private passwordUser: String;
    private dateUser?: String;
    private tokenUser?: String;

    get _id(): String {
        return this._idUser;
    }

    set _id(_id: String) {
        this._idUser = _id;
    }

    get firstname(): String {
        return this.firstnameUser;
    }

    set firstname(firstname: String) {
        this.firstnameUser = firstname;
    }

    get lastname(): String {
        return this.lastnameUser;
    }

    set lastname(lastname: String) {
        this.lastnameUser = lastname;
    }

    get email(): String {
        return this.emailUser;
    }

    set email(email: String) {
        this.emailUser = email;
    }

    get password(): String {
        return this.passwordUser;
    }

    set passowrd(password: String) {
        this.passwordUser = password;
    }

    get date(): String {
        return this.dateUser;
    }

    set date(date: String) {
        this.dateUser = date;
    }

    get token(): String {
        return this.tokenUser;
    }

    set token(token: String) {
        this.tokenUser = token;
    }

    formFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'firstname',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Firstname',
                  placeholder: 'Firstname',
                  required: true,
                },
                validation: {
                    messages: {
                        required: 'You need to provide an firstname'
                    }
                }
            },
            {
                key: 'lastname',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Lastname',
                  placeholder: 'Lastname',
                  required: true,
                },
                validation: {
                    messages: {
                        required: 'You need to provide an lastname'
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
