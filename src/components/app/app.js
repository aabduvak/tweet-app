import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import Styled from 'styled-components';

const AppBlock = Styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const SearchPanelBlock = Styled.div`
    margin: 1rem 0;
    display: flex;
`;

const data = [
    {label: "Going to learn ReactJS", important: true, id: 1},
    {label: "That's perfect", important: false, id: 2},
    {label: "I have to take a break...", important: false, id: 3}
];


const App = () => {
    return (
        <AppBlock>
            <AppHeader/>
            <SearchPanelBlock>
                <SearchPanel/>
                <PostStatusFilter/>
            </SearchPanelBlock>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;