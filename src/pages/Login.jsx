import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { verifyLogin } from '../logic/fetch.js';

export function Login() {
  const [inputs, setInputs] = useState({});
  const [logged, setLog] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const sendInput = async () => {
    const response = await verifyLogin(inputs);
    setLog(response);
    setInputs({});
    navigate('/users');
  } 

  return (
    <>
      <h1>{t('login.title')}</h1>
      <p>
        {t('login.intro')}
      </p>
      <input type='text' name='username' id='username' onChange={handleChange} />
      <input type='password' name='password' id='password' onChange={handleChange} />
      <button onClick={sendInput}>Accede</button>
      <div>{logged.message}</div>
      <button onClick={() => navigate('/frontpage')}>{t('login.frontpage_button')}</button>
      <button onClick={() => navigate('/register')}>{t('login.register_button')}</button>
    </>
  )
}