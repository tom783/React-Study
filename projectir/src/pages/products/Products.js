import React from 'react';

import BaseTemplate from 'components/common/templates/BaseTemplate';
import ProductContainer from 'containers/products/ProductContainer';

function Products(props) {
    return (
        <BaseTemplate>
            <ProductContainer />
        </BaseTemplate>
    );
}

export default Products;