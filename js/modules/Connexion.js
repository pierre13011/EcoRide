

(() => {

  const form = document.querySelector('.login_container form');

  const emailInput = document.getElementById('pseudo');
  const passwordInput = document.getElementById('password');
  const btnSubmit = document.querySelector('.login_container button[type="submit"]');  


  const messagesDiv = document.createElement('div');
  messagesDiv.setAttribute('aria-live', 'polite');
  messagesDiv.className = 'auth-messages mt-2';
  
  btnSubmit.parentElement.insertElement('afterend', messagesDiv);

    const showMessage = (text, { type = 'info', timeout = 2000 } = {}) => {
      messagesDiv.innerHTML = ''; 
      const p = document.createElement('p');
      p.textContent = text;
      p.className = `message message-${type}`; 
      messagesDiv.appendChild(p);
      if (timeout > 0) {
        setTimeout(() => {
          if (messagesDiv.contains(p)) messagesDiv.removeChild(p);
        }, timeout);
      }
    };

    const validateEmail = (value) => {
      return /^\S+@\S+\.\S+$/.test(value);
    };

    const validatePassword = (value) => {
      return typeof value === 'string' && value.length >= 6;
    };

    const setButtonState = (enabled) => {
      btnSubmit.disabled = !enabled;
      btnSubmit.setAttribute('aria-disabled', String(!enabled));
    };

    [emailInput, passwordInput].forEach((input) => {
      input.addEventListener('keydown', (eva) => {
        if (eva.key === 'Enter') {
          ev.preventDefault();
          handleSubmit();
        }
      });
    });


      const validateForm = () => {
      const email = emailInput.value.trim();
      const pwd = passwordInput.value;
      const emailOk = validateEmail(email);
      const pwdOk = validatePassword(pwd);
      return { emailOk, pwdOk, email, pwd };
    };

    const updateUiValidity = () => {
      const { emailOk, pwdOk } = validateForm();
      setButtonState(emailOk && pwdOk);
    };

    emailInput.addEventListener('input', updateUiValidity);
    passwordInput.addEventListener('input', updateUiValidity);

    updateUiValidity();

    async function handleSubmit() {
      const { emailOk, pwdOk, email, pwd } = validateForm();

      messagesDiv.innerHTML = '';
      if (!emailOk) {
        showMessage('Adresse email invalide.', { type: 'err' });
        emailInput.focus();
        return;
      }
      if (!pwdOk) {
        showMessage('Le mot de passe doit contenir au moins 6 caractères.', { type: 'err' });
        passwordInput.focus();
        return;
      }
      setButtonState(false);
      btnSubmit.textContent = 'Connexion...';
    }
  })();


