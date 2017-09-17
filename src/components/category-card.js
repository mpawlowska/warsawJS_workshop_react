import React, {Component} from 'react';
import Input from './input.js';

class CategoryCard extends Component {
    state = {
        editMode: false,
        budgeted: this.props.item.budgeted // budgeted będzie brało z tego kompenentu
    };

    handleInputChange = (e) => {
        this.setState({ budgeted: e.target.value })
    };

    handleSubmit = () => {
        this.handleChangeEditMode();
        this.props.onChangeCategoryBudget(this.props.item.id, this.state.budgeted)
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    };

    handleChangeEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    };

    render() {
        const {
            item: {name, budgeted, activity},
        } = this.props;

        return (
            <div className="Category-card">
                <h1>{name}</h1>
                <h2>
                    Budgeted:
                    {this.state.editMode ? (
                            <Input
                                autoFocus
                                type="number"
                                name="budgeted"
                                value={this.state.budgeted}
                                placeholder="Budgeted"
                                onChange={this.handleInputChange}
                                onBlur={this.handleSubmit}
                                onKeyPress={this.handleKeyPress}
                            />
                        ) : (
                            <span onClick={this.handleChangeEditMode}>{budgeted}</span>
                        )}
                    zł
                </h2>
                <div className="Category-card__assets">
                    <span>Activity: {activity} zł</span>
                    <span>Available: {budgeted - activity} zł</span>
                </div>
            </div>
        );
    }
}

export default CategoryCard;

// każda klasa w React ma mieć metodę render(), aby zwracała jakiegos jsx