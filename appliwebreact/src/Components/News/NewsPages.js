import {useEffect, useState} from "react";
import TitlePage from "./TitlePage";
import News from "./News";


function NewsPage() {
    const [myNews, setNews] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
            .then(response => {
                console.log(response);
                return  response.json()
            }).then(data => {
            console.log(data.articles);
            setNews(data.articles)
        })
    }

    useEffect(() => {
        fetchMoviesHandler();
    }, [myNews]);


    const ChildToParentUpdater =(data) => {
        console.log('ChildToParentUpdater',data);
    }

    return (
        <div className="App">
            <TitlePage titre='Some news' updater={ChildToParentUpdater} />
            {
                myNews.map((element) => {
                    return <News elem={element} />
                })
            }
        </div>
    );
}

export default NewsPage;