import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Navigation = () => {
    const { t } = useTranslation();
    const availableLanguages = ['en', 'ru']

    return (
        <nav className="navbar navbar-light navbar-expand-lg navigation-clean" style={{fontFamily: 'Courier New', marginBottom: 20}}>
            <div className="container">
                <a className="navbar-brand" href="/"><b>{ t('navbar_brand') }</b></a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="/">{ t('nav_item_bio') }</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://perevalov.com/static/pdf/cv.pdf">{ t('nav_item_cv') }</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://scholar.google.com/citations?user=VRJwbL4AAAAJ&hl=en">{ t('nav_item_research') }</a></li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown">{ t('nav_item_blog') }</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://habr.com/ru/users/perevalov_a/posts/">habr.ru</a>
                                <a className="dropdown-item" href="https://perevalov.medium.com/">Medium</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown">{ t('nav_item_lang') }</a>
                            <div className="dropdown-menu">
                                {
                                    availableLanguages.map((language, index) => 
                                        <a className="dropdown-item" key={language} onClick={() => i18next.changeLanguage(language)}>{language}</a>
                                    )
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;