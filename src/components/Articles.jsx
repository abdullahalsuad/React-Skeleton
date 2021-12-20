import React, { useEffect, useState } from 'react'
import Skeletons from '../../src/skeletons/Skeletons';

const Articles = () => {
  const [articles, setArticles] = useState(null);

  // runs automatically after initial render
  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setArticles(data);
    }, 5000)
  }, [])

  return (
    <div className="articles">
      <h2>All Articles</h2>

      <Skeletons type="title"/>
      <Skeletons type="text"/>
      <Skeletons type="thumbnail"/>
      <Skeletons type="avatar"/>


      {articles && articles.map(article => (
        <div className="article" key={ article.id }>
          <h3>{ article.title }</h3>
          <p>{ article.body }</p>
        </div>
      ))}

      {!articles && <div>Loading...</div>}
    </div>
  )
}

export default Articles