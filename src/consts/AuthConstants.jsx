export const signInInput = [
  {
    lable: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your Email',
    errorMessage: "Please enter a valid email",
  },
  {
    lable: 'Password',
    name: 'password',
    type: 'current-password',
    placeholder: 'Enter your Password',
    errorMessage: "",
  },
];

export const signUpInput = [
  {
    lable: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Enter Username',
    errorMessage:
    "",
  },
  {
    lable: 'Company Name',
    name: 'companyName',
    type: 'text',
    placeholder: 'Enter your Company Name',
    errorMessage: "",
  },
  {
    lable: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your Email',
    errorMessage: "Please enter a valid email",
  },
  {
    lable: 'Password',
    name: 'password',
    type: 'current-password',
    placeholder: 'Enter your Password',
    errorMessage: "",
  },
  {
    lable: 'Confirm Password',
    name: 'confirmPassword',
    type: 'current-password',
    placeholder: 'Verify your Password',
    errorMessage: "",
  },
]

export const EMAIL_REGEX = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/