import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    console.log(parsedData);
    props.setProgress(80);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(true)
    props.setProgress(100);
    setPage(page+1)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    if (articles.length >= totalResults) {
      // No more data available, return from the function
      return;
    }
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <div className='container my-4'>
      <h2 className='text-center' style={{marginTop:'90px'}}>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>

        <div className='row my-3'>
          {articles.map((element, index) => {
            return (
              <div className='col-md-4' key={element.url || index}>
                <NewsItem
                  title={element.title ? (element.title.length > 45 ? element.title.slice(0, 45) + "..." : "") : ""}
                  desc={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "URL NOT FOUND"}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                  length={articles.length}
                  totalResults={totalResults}
                />
              </div>
            );
          })}

        </div>
      </InfiniteScroll>
    </div>
  )
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News
