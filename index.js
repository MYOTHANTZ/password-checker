function checkPassword() {
  const password = document.getElementById('password').value;
  const strengthBar = document.getElementById('strengthBar');
  const feedbackList = document.getElementById('feedback');

  feedbackList.innerHTML = '';
  
  const requirements = {
    length: password.length >= 8,
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    space: !/\s/.test(password),
    long: password.length >= 12,
    veryLong: password.length >= 16
  };

  let score = 0;
  const messages = [];

  if (requirements.length) score += 1;
  else messages.push('Minimum 8 characters required');
  
  if (requirements.lower) score += 1;
  else messages.push('Missing lowercase letter');
  
  if (requirements.upper) score += 1;
  else messages.push('Missing uppercase letter');
  
  if (requirements.number) score += 1;
  else messages.push('Missing number');
  
  if (requirements.symbol) score += 1;
  else messages.push('Missing symbol');
  
  if (requirements.space) score += 1;
  else messages.push('Contains spaces');
  
  if (requirements.long) score += 2;
  if (requirements.veryLong) score += 2;

  let strengthClass = 'weak';
  if (score >= 10) {
      strengthClass = 'very-strong';
  } else if (score >= 7) {
      strengthClass = 'strong';
  } else if (score >= 4) {
      strengthClass = 'medium';
  }

  strengthBar.className = `strength-bar ${strengthClass}`;

  messages.forEach(message => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="invalid">⨯</span>${message}`;
      feedbackList.appendChild(li);
  });

  if (messages.length === 0) {
      const li = document.createElement('li');
      li.innerHTML = `<span class="valid">✓</span>CYBER SECURE!`;
      feedbackList.appendChild(li);
  }

  const strengthText = document.getElementById('strengthText');

  const strengthLabels = {
    'weak': 'Weak',
    'medium': 'Medium',
    'strong': 'Strong',
    'very-strong': 'Very Strong'
  };

   strengthText.textContent = `Password Strength: ${strengthLabels[strengthClass]}`;
}