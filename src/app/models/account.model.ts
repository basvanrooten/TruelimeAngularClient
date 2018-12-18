import { FormlyFieldConfig } from "@ngx-formly/core";

export class Account {
    username: string;
    password: string;

    formFields(){
        return <FormlyFieldConfig[]>[{
            key: 'username',
                type: 'input',
                templateOptions:{
                  type: 'text',
                  label: "Username",
                  placeholder: "Username",
                  required: true,
                },
                validation:{
                  messages: {
                    required: 'You need to provide a username'
                  }
                }
              },
            {
                key: 'password',
                type: 'input',
                templateOptions:{
                  type: 'password',
                  label: "Password",
                  placeholder: "Password",
                  required: true,
                },
                validation:{
                  messages: {
                    required: 'You need to provide a password'
                  }
                }
              },         
        ];
    }
}