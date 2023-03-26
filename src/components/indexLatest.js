import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const IndexLatest = () => {
    // fetch latest news with a get request
    const [latestNews, setLatestNews] = useState([]);

    const getLatestNews = async () => {
        console.log("TBD")
    }
    
    useEffect(() => {
        getLatestNews();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    latestNews.map((article, index) =>
                        <div key={index} className="col-lg-4" style={{marginTop: 10, marginBottom: 10}}>
                            <div className="card"><img className="card-img-top w-100 d-block fit-cover" style={{height: "100%"}} src={article.img_url} />
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0">{article.type}</p>
                                    <a className="card-title" href={article.url} style={{color: 'black'}}><h4>{article.title}</h4></a>
                                    <p className="card-text">{article.description}</p>
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