export const signInInput = [
  {
    lable: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your Email',
    errorMessage: 'Please enter a valid email',
  },
  {
    lable: 'Password',
    name: 'password',
    type: 'current-password',
    placeholder: 'Enter your Password',
    errorMessage:
      'Please enter min 8 letter password, including symbol, upper and lower case letters and a number',
  },
]

export const signUpInput = [
  {
    lable: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Enter Username',
    errorMessage: 'Please enter a username',
  },
  {
    lable: 'Company Name',
    name: 'companyName',
    type: 'text',
    placeholder: 'Enter your Company Name',
    errorMessage: 'Please enter a company name',
  },
  {
    lable: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your Email',
    errorMessage: 'Please enter a valid email',
  },
  {
    lable: 'Password',
    name: 'password',
    type: 'current-password',
    placeholder: 'Enter your Password',
    errorMessage:
      'Please enter min 8 letter password, including symbol, upper and lower case letters and a number',
  },
  {
    lable: 'Confirm Password',
    name: 'confirmPassword',
    type: 'current-password',
    placeholder: 'Verify your Password',
    errorMessage: 'Password does not match',
  },
]

export const EMAIL_REGEX = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export const COMPANY_NAME_REGEX = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/

export const USERNAME_REGEX = /^[a-zA-Z0-9]+$/