import { FormlyFieldConfig } from "@ngx-formly/core";

export class Account {
    username: string;
    password: string;

    formFields(){
        return <FormlyFieldConfig[]>[{
            key: 'email',
                type: 'input',
                templateOptions:{
                  type: 'text',
                  label: "Email",
                  placeholder: "Email",
                  required: true,
                },
                validation:{
                  messages: {
                    required: 'You need to provide an email adress'
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