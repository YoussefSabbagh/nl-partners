const AccessFinder = {};
const URL = `${process.env.NEXT_PUBLIC_URL_SERVER}auth/`;

AccessFinder.signup = async (user) => {
  const response = await fetch(URL + 'register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user }),
  });
  return await response.json();
};

AccessFinder.login = async (user) => {
  const response = await fetch(URL + 'login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user }),
  });
  // const res = await response.json();
  // console.log('result ===', res);
  // return res;
  return await response.json();
};

AccessFinder.verify = async () => {
  const response = await fetch(URL + 'is-verify', {
    method: 'GET',
    headers: { token: localStorage.token },
  });
  return await response.json();
};

export default AccessFinder;
