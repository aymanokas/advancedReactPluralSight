import React from 'react'

const Styles= {
    article : {
        paddingBottom : 10,
        borderBorromStyle:'solid',
        borderBottomColor:'#aaa',
        borderBottomWidth:1,
        marginBottom:10,
    },
    title : {
        fontWeight:'bold'
    },
    date : {
        fontSize: '0.85em',
        color: '#888'
    },
    author : {
        paddingTop:10,
        paddingBottom:10
    },
    body : {
        paddingLeft:20,
    }
}

 const Article = (props) => {
     const {article,author} = props;
  return (
    <div style={Styles.article}>
      <div style={Styles.title}>{article.title}</div>
      <div style={Styles.date}>{article.date}</div>
      <div style={Styles.author}>
          <a href={author.website}>
            {author.firstName} {author.lastName}
          </a>
      </div>
      <div style={Styles.body}>{article.body}</div>
    </div>
  )
}

export default Article;
