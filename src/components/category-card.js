import React from 'react';
import PropTypes from 'prop-types';

const CategoryCard = ({ item: {name, budgeted, activity} }) => (
    <div className="Category-card">
        <h1>{name}</h1>
        <h2>Budgeted: {budgeted}</h2>
        <div className="Category-card__assets">
            <span>Activity: {activity} zł</span>
            <span>Available: {budgeted - activity} zł</span>
        </div>
    </div>
);


CategoryCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default CategoryCard;