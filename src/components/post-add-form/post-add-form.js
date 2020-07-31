import React from 'react';
import './post-add-form.css';
import Styled from 'styled-components';


const FormBlock = Styled.form`
    margin-top: 20px;
    display: flex;
`;


const PostAddForm = () => {
    return (
        <FormBlock>
            <input
                className="form-control new-post-label"
                type="text"
                placeholder="О чём вы думаете сейчас?"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary">
                Добавить</button>
        </FormBlock>
    )
}

export default PostAddForm;