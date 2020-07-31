import React from 'react';
import './post-add-form.css';


const PostAddForm = ({OnAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                className="form-control new-post-label"
                type="text"
                placeholder="О чём вы думаете сейчас?"
            />
            <button
                onClick = { () => OnAdd('Hello')}
                type="submit"
                className="btn btn-outline-secondary">
                Добавить</button>
        </div>
    )
}

export default PostAddForm;