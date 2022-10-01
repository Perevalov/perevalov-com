import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Linkedin, Youtube, Twitter, GitHub} from 'react-feather';
import { useTranslation } from 'react-i18next';

const IndexAbout = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3"><img  style={{maxWidth: '100%', maxHeight: '100%', marginBottom: 5}} src="/img/index-perevalov.jpeg"/></div>
                <div className="col-md-6 col-lg-8">
                    <p style={{fontFamily: 'Courier New'}} dangerouslySetInnerHTML={{__html: t('index_description')}} />
                    <p>
                        <a href='https://www.linkedin.com/in/aleksandr-perevalov/' style={{margin: 5}}><Linkedin /></a>
                        <a href='https://twitter.com/Perevalov_A' style={{margin: 5}}><Twitter /></a>
                        <a href='https://github.com/perevalov' style={{margin: 5}}><GitHub /></a>
                        <a href='https://www.youtube.com/channel/UC11ulcaBzDzadMJU1UKl8PA' style={{margin: 5}}><Youtube /></a></p>
                </div>
            </div>
        </div>
    )
}

export default IndexAbout;