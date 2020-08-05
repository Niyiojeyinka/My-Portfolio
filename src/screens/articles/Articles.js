import React, { Component } from 'react'
import { FaEye } from 'react-icons/fa'

class Articles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [
        {
          title: 'Give your API More Security Layer',
          excerpt: 'Due to the nature of the product am..',
          image:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--jr7yiztV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/open-source/image/upload/v1596308756/articles/apiart_n29ye2.jpg',
          link:
            'https://dev.to/niyiojeyinka/give-your-api-more-security-layer-26of',
        },
        {
          title: 'The Jude way to recursion',
          excerpt: 'An article that use dream analogy to explain recursion',
          image: 'https://i.ibb.co/b1NFs7D/rec.png',
          link: 'https://dev.to/niyiojeyinka/the-jude-way-to-recursion-21hh',
        },

        {
          title: 'Using Laravel Guard for multi-auth',
          excerpt: 'talks about using guard in laravel',
          image: 'https://i.ibb.co/CB9PhYY/laravel.png',
          link:
            'https://dev.to/niyiojeyinka/learn-to-use-laravel-guard-by-creating-an-ads-network-2ifp',
        },
        {
          title: 'Create a multi-site website',
          excerpt:
            'An article that teach how to create a multi-site website in CI',
          image: 'https://i.ibb.co/60f7fd9/ciblog.png',
          link: '',
        },
      ],
    }
  }
  render() {
    let articlesList = this.state.articles.map((article, index) => {
      return (
        <div
          key={index}
          className="w3-card-4 w3-margin"
          style="max-width: 300px"
        >
          <img
            src={`${article.image}`}
            alt={article.title}
            className=""
            style={{ maxHeight: '150px', width: '100%' }}
          ></img>
          <div className="w3-padding">
            <strong>{`${article.title}`}</strong>
            <p>{`${article.excerpt}`}</p>
          </div>
          <div className="w3-row w3-small w3-center w3-padding w3-margin">
            <a
              href={`${article.link}`}
              className="w3-button w3-hover-text-black w3-border w3-padding"
            >
              Read Post{' '}
              <span className="w3-small w3-margin-bottom">
                <FaEye />
              </span>
            </a>
          </div>
        </div>
      )
    })
    return (
      <div className="d-flex flex-wrap w3-margin-top w3-padding-top">
        {articlesList}
      </div>
    )
  }
}
export default Articles
