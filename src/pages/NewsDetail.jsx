import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

export function FrontPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const newsId = useParams();

  return (
    <>
      <h1>{t('frontpage.title')}</h1>
      <p>
        {t('frontpage.intro')}
      </p>
      <button onClick={ () => navigate('/news')}>{t('frontpage.news_button')}</button>
      <button onClick={ () => navigate('/login')}>{t('frontpage.login_button')}</button>
    </>
  )
}