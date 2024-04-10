import { ThunkAction } from "redux-thunk";
import { RootState } from "./reducers";
import { Product, Sales } from "../utils/types";
import productData from "../data/stackline_frontend_assessment_data_2021.json";

export const FETCH_PRODUCT_DATA = "FETCH_PRODUCT_DATA";
export const RECEIVE_PRODUCT_DATA = "RECEIVE_PRODUCT_DATA";

export const fetchProductData = (): ThunkAction<
	void,
	RootState,
	unknown,
	any
> => {
	return (dispatch) => {
		dispatch({ type: FETCH_PRODUCT_DATA });
		dispatch(receiveProductData(productData[0], productData[0].sales));
	};
};

export const receiveProductData = (product: Product, sales: Sales[]) => ({
	type: RECEIVE_PRODUCT_DATA,
	payload: { product, sales },
});
