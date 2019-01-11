import { FormlyFieldConfig } from '@ngx-formly/core';

export class User {
    _id?: String;
    firstName?: String;
    lastName?: String;
    email: String;
    password: String;
    date?: String;
    token?: String;
    exp?: Number;

    register() {
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
                        required: 'You need to provide a first name'
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
                        required: 'You need to provide a last name'
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
                        required: 'You need to provide an valid email address'
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

    login() {
        return <FormlyFieldConfig[]>[
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
                        required: 'You need to provide an email address'
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
