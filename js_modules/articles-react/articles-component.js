import React from "react";
import Article from "./article-component"

export default class extends React.Component
{
    constructor( obj )
    {
        super(obj);
    }

    render()
    {
        return this.props.articles.map( (item, i) => {
            return <Article onDelete={ ()=> { this.props.onDelete(i) } } key={i} title={item.title} content={item.body} />
        } );
    }
}