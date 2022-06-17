const pw = document.getElementById('password');
const pwCheck = document.getElementById('pw_check');
const button = document.getElementById('edit_button');

const check = (e) => {
  if (pw.value == '' && pwCheck.value == '') {
    document.getElementById('check_text').innerHTML = '';
    button.disabled = false;

  } else if (pw.value != '' && pwCheck.value != '') {
    if (pw.value == pwCheck.value) {
      document.getElementById('check_text').innerHTML = '비밀번호가 일치합니다';
      document.getElementById('check_text').style.color = 'mediumblue';
      button.disabled = false;
    } else {
      document.getElementById('check_text').innerHTML = '비밀번호가 일치하지 않습니다';
      document.getElementById('check_text').style.color = 'red';
      button.disabled = true;
    }
  } else {
    document.getElementById('check_text').innerHTML = '비밀번호가 일치하지 않습니다';
    document.getElementById('check_text').style.color = 'red';
  }
}

pw.addEventListener('change', (e) => {
  check(e);
});
pwCheck.addEventListener('change', (e) => {
  check(e);
});