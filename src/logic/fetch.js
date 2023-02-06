async function serverPost(url, body, token) {
  const data = await customFetch(url, 'POST', body, token);
  return data;
}

async function serverGet(url, body, token) {
  const data = await customFetch(url, 'GET', body, token);
  return data;
}

async function customFetch(url, method, body, token) {
  const domain = 'https://jonathebridge-eshop-api.onrender.com/';
  const getUrl = domain + url;
  const config = {
    method: method,
    headers: {
      'content-type': 'application/json',
    }
  }

  if (method === ('POST' || 'PUT' || 'DELETE')) { config.body = JSON.stringify(body) }
  if (token !== (undefined || '')) { config.headers.authorization = token }

  const login = await fetch(getUrl, config);
  const data = await login.json();
  return { status: login.status, data: data };
}

async function verifyLogin(inputs) {
  const fetchToken = await serverPost('login', inputs, '');
  if (fetchToken.status === 200) {
    sessionStorage.setItem('sessionToken', fetchToken.data.token);
    return { message: 'Has accedido.' }
  }
  if (fetchToken.status === 400) { return { message: 'Introduzca usuario y contraseña.' } }
  if (fetchToken.status === 401) { return { message: 'Usuario y/o contraseña incorrectos.' } }
  return response;
}

async function register(inputs) {
  const fetchToken = await serverPost('register', inputs, '');
  if (fetchToken.status === 200) {
    sessionStorage.setItem('sessionToken', fetchToken.data.token);
    return { message: 'Has accedido.' }
  }
  if (fetchToken.status === 400) { return { message: 'Introduzca usuario y contraseña.' } }
  if (fetchToken.status === 401) { return { message: 'Usuario y/o contraseña incorrectos.' } }
  return response;
}

export { serverPost, serverGet, verifyLogin, register };
