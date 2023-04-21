import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  // default - not set -> auth/ only -> signup page
  const mode = searchParams.get('mode') || 'signup';

  if (mode !== 'login' && mode !== 'signup') {
    throw json(
      { message: 'Only login or signup modes are allowed' },
      { status: 500 }
    );
  }
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const res = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  console.log(res.status);

  // auth errors returned by server
  if (res.status === 422 || res.status === 401) {
    return res;
  }

  if (!res.ok) {
    throw json({ message: 'Couldnot Authenticate Data' }, { status: 500 });
  }

  // Manage token
  const resData = await res.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
  return redirect('/');
}
