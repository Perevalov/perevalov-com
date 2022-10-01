import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const IndexLatest = () => {
    const latestNews = [1, 2, 3]
    return (
        <div className="container">
            <div className="row">
                {
                    latestNews.map((news, index) =>
                        <div key={index} className="col-lg-4" style={{marginTop: 10, marginBottom: 10}}>
                            <div className="card"><img className="card-img-top w-100 d-block fit-cover" style={{height: "100%"}} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0">Article</p>
                                    <h4 className="card-title">Lorem libero donec</h4>
                                    <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
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