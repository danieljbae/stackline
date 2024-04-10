import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from '../ProductDetails/ProductDetails';
import SalesChart from '../SalesChart/SalesChart';
import SalesTable from '../SalesTable/SalesTable';
import { fetchProductData } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { AppDispatch } from '../../redux/store';
import './ProductPage.css';

const ProductPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { product, sales, loading } = useSelector((state: RootState) => state);

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-page-container">
            <div className="product-details-container">
                {product && <ProductDetails product={product} />}
            </div>
            <div className="sales-container">
                <SalesChart sales={sales} />
                <SalesTable sales={sales} />
            </div>
        </div>
    );
};

export default ProductPage;