import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const IndexLatest = () => {
    const { t } = useTranslation();
    // fetch latest news with a get request
    const staticLatestNews = [
        {
            "img_url": "/img/applied-research.png",
            "type": t('research_type'),
            "title": t('research_title'), 
            "description": t('research_description')
        },
        {
            "img_url": "/img/ai-consulting.png",
            "type": t('ai_consulting_type'),
            "title": t('ai_consulting_title'), 
            "description": t('ai_consulting_description')
        }
    ]
    const [latestNews, setLatestNews] = useState(staticLatestNews);

    /*const getLatestNews = async () => {
        console.log("TBD")
    }*/
    i18next.on('languageChanged', () => {
        setLatestNews([
            {
                "img_url": "/img/applied-research.png",
                "type": t('research_type'),
                "title": t('research_title'), 
                "description": t('research_description')
            },
            {
                "img_url": "/img/ai-consulting.png",
                "type": t('ai_consulting_type'),
                "title": t('ai_consulting_title'), 
                "description": t('ai_consulting_description')
            }
        ]);
    });

    return (
        <div className="container" style={{marginTop: "15px"}}>
            <div className="row text-center">
                <h3 style={{fontFamily: 'Courier New'}} dangerouslySetInnerHTML={{__html: t('latest_title')}}></h3>
            </div>

            <div className='row'>
                {
                    latestNews.map((article, index) =>
                        <div key={index} className="col-lg-4" style={{marginTop: 10, marginBottom: 10}}>
                            <div className="card"><img className="card-img-top w-100 d-block fit-cover" style={{height: "100%"}} src={article.img_url} />
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0" style={{fontFamily: 'Courier New'}}>{article.type}</p>
                                    <a className="card-title" style={{color: 'black', textDecoration: 'none', fontFamily: 'Courier New'}}><h4>{article.title}</h4></a>
                                    <p className="card-text" style={{fontFamily: 'Courier New'}} dangerouslySetInnerHTML={{__html: article.description}}></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default IndexLatest;