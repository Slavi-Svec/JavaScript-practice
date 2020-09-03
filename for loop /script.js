  const element  = document.getElementById('div')
  const fragment = document.createDocumentFragment();
  const browsers = ['Firefox', 'Chrome', 'Opera',
      'Safari', 'Internet Explorer'];

  browsers.forEach(function(browser) {
      let li = document.createElement('li');
      li.textContent = browser;
      fragment.appendChild(li);
  });

  element.appendChild(fragment);