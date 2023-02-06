import { changeLanguage } from 'i18next'; // changeLanguage('en-US')
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { register } from '../logic/fetch.js';
import { useState } from 'react';

export function Register() {
  const [inputs, setInputs] = useState({});
  const [logged, setLog] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const sendInput = async () => {
    const response = await register(inputs);
    setLog(response);
    setInputs({});
  }

  return (
    <>
      <h1>{t('register.title')}</h1>
      <p>
        {t('register.intro')}
      </p>
      <input type='text' name='username' id='username' onChange={handleChange} />
      <input type='password' name='password' id='password' onChange={handleChange} />
      <button onClick={sendInput}>Registrate</button>
      <div>{logged.message}</div>
      <button onClick={() => navigate('/frontpage')}>{t('register.frontpage_button')}</button>
      <button onClick={() => navigate('/login')}>{t('register.login_button')}</button>
    </>
  )
}