import React, { Component } from 'react'

class TransactionForm extends Component {

    state = {
        description: '',
        value: '',
        date: '',
        category: ''
    };

    handleInputChange = (key, value) => {
        this.setState({ [key]: value })
    };

    handleSubmitForm = (e) => { // jak mam jeden parametr to mogę napisać bez nawiasów (e), czyli e
        e.preventDefault();
        const {description, value, date, category} = this.state; // jak napisałam to, to mogę wykomentować to co poniżej wykomentowałam, gdzie definiowałam pojedynczo każdy z propsów i zamiast tego napisać tą linijkę ponizej,gdzie tlyko wymieniam props
            this.props.onSubmit({description, value, date, category});
            // description: this.state.description,
            // value: this.state.value,
            // date: this.state.date,
            // category: this.state.category
    };

    render() {
        const { description, value, date, category } = this.state;  // wyciągam je tutaj, aby potem w inputach nie pisać value = {this.props.description} itd., tylko value = {description} itd.
        return (
            <form onSubmit={this.handleSubmitForm}>
                <input
                    type="text"
                    placeholder="Description:"
                    value={description}
                    onChange={(e) => this.handleInputChange('description', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Value:"
                    value={value}
                    onChange={(e) => this.handleInputChange('value', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Date:"
                    value={date}
                    onChange={(e) => this.handleInputChange('date', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category:"
                    value={category}
                    onChange={(e) => this.handleInputChange('category', e.target.value)}
                />
                <button>Add transaction</button>
            </form>
        )

    }
}

export default TransactionForm;