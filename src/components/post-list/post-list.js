import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, OnDelete}) => {

    const elements = posts.map( (item) => {

        if ( typeof item === 'object' && isEmpty(item) ){ 
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className='list-group-item'>
                    <PostListItem 
                        {...itemProps}
                        OnDelete={() => OnDelete(id)}
                    />
                </li>
            )
        }   
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        } 
            return false;
    }

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;