import React, {Component} from 'react';
import './post-add-form.css';


export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            text: ""
        }
    }
    
    onValueChange(e) {
        this.setState({
            text: e.target.value
        }) 
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.OnAdd(this.state.text);
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit} 
                className="bottom-panel d-flex">
                    <input
                        className="form-control new-post-label"
                        type="text"
                        placeholder="О чём вы думаете сейчас?"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-secondary">
                        Добавить
                    </button>
            </form>
        )
    }
}
