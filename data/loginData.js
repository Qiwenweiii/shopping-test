module.exports = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expected: 'success',
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expected: 'fail',
  },
  {
    username: 'wrong_user',
    password: '123456',
    expected: 'fail',
  },
  // {
  //   username: 'standard_user',
  //   password: 'wrong_password',
  //   expected: 'fail',
  // },
];
