import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    console.log(posts);
    const articleArr = posts.map((blogInfo) => {
        return (
            <Article key={blogInfo.title} id={blogInfo.id} title={blogInfo.title} date={blogInfo.date} preview={blogInfo.preview} minutes={blogInfo.minutes} />
        );
    })

    return (
        <main>{articleArr}</main>
    )
}

export default ArticleList;