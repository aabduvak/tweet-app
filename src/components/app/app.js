import React, {Component} from 'react';
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


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn ReactJS", important: true, id: 1},
                {label: "That's perfect", important: false, id: 2},
                {label: "I have to take a break...", important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
    }
    
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            };
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <SearchPanelBlock>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelBlock>
                <PostList
                    posts={this.state.data}
                    OnDelete={this.deleteItem}
                />
                <PostAddForm
                    OnAdd={this.addItem}
                />
            </AppBlock>
        )
    }
}

