export const checkAuthNumber = v => {
  if (v === '') {
    return {
      authNumberErr: true,
      authNumberErrMsg: '驗證號碼不能為空'
    };
  }

  if (v.length > 10) {
    return {
      authNumberErr: true,
      authNumberErrMsg: '驗證號碼過長'
    };
  }

  return {
    authNumberErr: false,
    authNumberErrMsg: ''
  };
};

export const checkPhone = v => {
  if (v === '') {
    return {
      phoneErr: true,
      phoneErrMsg: '手機號碼不能為空'
    };
  }

  const re = /^[09]{2}[0-9]{8}$/;
  if (!re.test(v)) {
    return {
      phoneErr: true,
      phoneErrMsg: '請輸入10位手機號碼數字'
    };
  }

  return {
    phoneErr: false,
    phoneErrMsg: ''
  };
};

export const checkEmail = v => {
  if (v === '') {
    return {
      emailErr: true,
      emailErrMsg: 'Email不能為空'
    };
  }

  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!re.test(v)) {
    return {
      emailErr: true,
      emailErrMsg: 'Email格式錯誤'
    };
  }

  return {
    emailErr: false,
    emailErrMsg: ''
  };
};

export const checkPassword = v => {
  if (v === '') {
    return {
      passwordErr: true,
      passwordErrMsg: '密碼不能為空'
    };
  }

  if (v.length < 8) {
    return {
      passwordErr: true,
      passwordErrMsg: '密碼長度至少要8個字元'
    };
  }

  return {
    passwordErr: false,
    passwordErrMsg: ''
  };
};

//only check password format, not compare password/confirmpassword
export const checkConfirmPassword = v => {
  const { passwordErr, passwordErrMsg } = checkPassword(v);
  if (passwordErr)
    return {
      confirmPasswordErr: true,
      confirmPasswordErrMsg: passwordErrMsg
    };

  return {
    confirmPasswordErr: false,
    confirmPasswordErrMsg: ''
  };
};

export const checkNewPassword = v => {
  const { passwordErr, passwordErrMsg } = checkPassword(v);
  if (passwordErr)
    return {
      newPasswordErr: true,
      newPasswordErrMsg: passwordErrMsg
    };

  return {
    newPasswordErr: false,
    newPasswordErrMsg: ''
  };
};

export const checkWithdrawValue = ({ value, tokenAssetTotal }) => {
  if (value === '') {
    return {
      valueErr: true,
      valueErrMsg: '金額不能為空'
    };
  }

  const re = /^\d+$/;
  if (!re.test(value)) {
    return {
      valueErr: true,
      valueErrMsg: '請輸入數字'
    };
  }

  if (value > tokenAssetTotal) {
    return {
      valueErr: true,
      valueErrMsg: '轉出金額不能大於目前可出資產總額'
    };
  }

  return {
    valueErr: false,
    valueErrMsg: ''
  };
};
