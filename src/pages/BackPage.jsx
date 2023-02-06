import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function BackPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <h1>{t('backpage.title')}</h1>
      <p>
        {t('backpage.intro')}
      </p>
      <button onClick={ () => navigate('/news')}>{t('backpage.news_button')}</button>
    </>
  )
}