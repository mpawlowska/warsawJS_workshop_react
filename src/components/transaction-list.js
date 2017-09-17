import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './transaction-card';

const TransactionList = ({ items, handleRemoveTransaction }) => (
    <div>
        {items.map(item => (
            <TransactionCard
                key={item.id}
                item={item}
                onRemoveTransaction={handleRemoveTransaction}
            />
        ))}
    </div>
);


TransactionList.propTypes = {
    items: PropTypes.array.isRequired
};


export default TransactionList;