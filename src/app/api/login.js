export function login() {
  window.localStorage.setItem('token', 'true');
}

export function logout() {
  window.localStorage.removeItem('token');
}
