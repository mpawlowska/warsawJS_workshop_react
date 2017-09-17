import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './transaction-card';

const TransactionList = ({ items }) => (
    <div>
    {items.map(item => <TransactionCard key={item.id} item={item}/>)}
    </div>
);


TransactionList.propTypes = {
    items: PropTypes.array.isRequired
};


export default TransactionList;