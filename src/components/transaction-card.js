import React from 'react';
import PropTypes from 'prop-types';

const TransactionCard = ({ item: { id, description, value, date, category }, onRemoveTransaction }) => (
    <div className="Transaction-card">
        <div
            className="Transaction-card__remove"
            onClick={() => onRemoveTransaction(id)}
        >
            &times;
        </div>
        <h1>{description}</h1>
        <h2>{value}</h2>
        <div className="Transaction-card__assets">
            <span>{date}</span>
            <span>{category}</span>
        </div>
    </div>
);

TransactionCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default TransactionCard;

