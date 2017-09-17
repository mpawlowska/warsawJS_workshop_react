import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './category-card';

const CategoryList = ({ items, handleChangeCategoryBudget } ) => (
    <div>
        {items.map(item => (
            <CategoryCard
                key={item.id}
                item={item}
                onChangeCategoryBudget={handleChangeCategoryBudget}
            />)
        )}
    </div>
);

CategoryList.propTypes = {
    items: PropTypes.array.isRequired
};

export default CategoryList;