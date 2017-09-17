import React, { Component } from 'react';
import Input from './input'

class TransactionForm extends Component {

    state = {
        description: '',
        value: '',
        date: '',
        category: ''
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmitForm = (e) => { // jak mam jeden parametr to mogę napisać bez nawiasów (e), czyli e
        e.preventDefault();
        const { description, value, date, category } = this.state; // jak napisałam to, to mogę wykomentować to co poniżej wykomentowałam, gdzie definiowałam pojedynczo każdy z propsów i zamiast tego napisać tą linijkę ponizej,gdzie tlyko wymieniam props
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
                <Input
                    name="description"
                    placeholder="Description:"
                    value={description}
                    onChange={this.handleInputChange}
                />
                <Input
                    name="value"
                    placeholder="Value:"
                    value={value}
                    onChange={this.handleInputChange}
                />
                <Input
                    name="date"
                    placeholder="Date:"
                    value={date}
                    onChange={this.handleInputChange}
                />
                <Input
                    name="category"
                    placeholder="Category:"
                    value={category}
                    onChange={this.handleInputChange}
                />
                <button>Add transaction</button>
            </form>
        )

    }
}

export default TransactionForm;


// wcześniej zamiast powyższej linijki miałam to co poniżej wykomentowane, ale odką∂ stworzyłam komponent input mam to zdefiniowane w tym oddzielnym pliku*/}
//*onChange={(e) => this.handleInputChange('category', e.target.value)}*/}