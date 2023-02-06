import { changeLanguage } from "i18next"; // changeLanguage('en-US')
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function NewsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <h1>{t('newspage.title')}</h1>
      <p>
        {t('newspage.intro')}
      </p>
      <button onClick={ () => navigate('/frontpage')}>{t('newspage.frontpage_button')}</button>
      <button onClick={ () => navigate('/backpage')}>{t('newspage.backpage_button')}</button>
    </>
  )
}