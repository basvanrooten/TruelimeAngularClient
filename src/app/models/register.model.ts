import { FormlyFieldConfig } from "@ngx-formly/core";

export class Register {
  email: string;
  firstname: string;
  lastname: string;
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
          required: 'You need to provide an email address'
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
      {
        key: 'firstname',
        type: 'input',
        templateOptions:{
          type: 'text',
          label: "FirstName",
          placeholder: "John",
          required: true,
        },
        validation:{
          messages: {
            required: 'You need to provide a first name'
          }
        }
      },
      {
        key: 'lastname',
        type: 'input',
        templateOptions:{
          type: 'text',
          label: "LastName",
          placeholder: "Doe",
          required: true,
        },
        validation:{
          messages: {
            required: 'You need to provide a last name'
          }
        }
      }
    ];
  }
}
