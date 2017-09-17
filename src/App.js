import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import HelloStateless from './components/hello-stateless';
// import HelloStateful from './components/hello-stateful';
// import Counter from './components/counter';
import { TransactionList } from './components';
import { CategoryList } from './components';

// Wykomentowałam, bo przerzuciłam komponentu do oddzielnego katalogu
// Tworzę obiekt, który ma być zwykła zmienną / funkcją
// const HelloStateless = ({ name }) => <div>Hello {name}</div>;
    // parametr stateless to po prostu propsy
// zamiast całych propsów powyżej wyciągam tylko {name} (przed strzałką)
// potem wyrzuciłam tą const do odzielnego pliku

// Tworzę obiekt, który ma być klasą
// class HelloStateful extends Component {
//     render() {
//         const { name } = this.props;
//         return <div>Hello {this.props.name}</div>
//     }
// }

class App extends Component {
    state = {
        transactions: [
            {
                id: 1,
                description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
                value: 20,
                date: '16.09.2017',
                category: 'Edukacja'
            },
            {
                id: 2,
                description: 'Bilet na pociąg',
                value: 120,
                date: '07.09.2017',
                category: 'Transport'
            },
            {
                id: 3,
                description: 'Części do samochodu',
                value: 430,
                date: '26.08.2017',
                category: 'Samochód'
            }
        ],
        categories: [
            {
                id: 1,
                name: 'Edukacja',
                budgeted: 100,
                activity: 50
            },
            {
                id: 2,
                name: 'Transport',
                budgeted: 200,
                activity: 123
            },
            {
                id: 3,
                name: 'Samochód',
                budgeted: 300,
                activity: 170
            }
        ]
    };

    handleRemoveTransaction = (id) => {
        this.setState({
            transactions: this.state.transactions.filter(transaction => transaction.id !== id)
        })
    };

    handleAddTransaction = (transaction) => {
        // const newArray = this.state.transaction;
        // newArray.push(transaction);

        this.setState({
            transactions: [
                ...this.state.transactions,
                {id: Math.random().toString(36).substring(7), ...transaction}
            ]  // to jest zamiast tego wykomentowanego powyżej - to samo zrobi
        })
    };

    handleChangeCategoryBudget = (id, value) => {
        const { categories } = this.state;
        const categoryIndex = categories.findIndex(category => category.id === id);

        if (categoryIndex === -1) {
            console.error('Category with index ${id} doesnt exist');
            return;
        }

        categories[categoryIndex].budgeted = value;

        this.setState({ categories });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                {/*<HelloStateless name="Magda"/>*/}
                {/*<HelloStateful name="Seba"/>*/}
                {/*<Counter/>*/}
                {/*// poniżej przekazuję props*/}
                <TransactionList
                    items={this.state.transactions}
                    // poniżej nie wywołuję funkcji, tylko tworzę jakby jej body
                    handleRemoveTransaction={this.handleRemoveTransaction}
                    handleAddTransaction={this.handleAddTransaction}
                />
                <CategoryList
                    items={this.state.categories}
                    handleChangeCategoryBudget={this.handleChangeCategoryBudget}
                />
            </div>
        );
    }
}

export default App;

// kod js w nawiasach wąsatych tu dajemy (to moze być zmienna, funkcja itp)
// klasa w Reacie dostaje zawsze obiekt props
// w funkcjcach strzałkowych nie trzeba używać return
