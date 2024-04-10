import { FETCH_PRODUCT_DATA, RECEIVE_PRODUCT_DATA } from "./actions";
import { Product, Sales } from "../utils/types";

export interface RootState {
	product: Product | null;
	sales: Sales[];
	loading: boolean;
}

const initialState: RootState = {
	product: null,
	sales: [],
	loading: false,
};

const rootReducer = (state = initialState, action: any): RootState => {
	switch (action.type) {
		case FETCH_PRODUCT_DATA:
			return { ...state, loading: true };
		case RECEIVE_PRODUCT_DATA:
			return {
				...state,
				product: action.payload.product,
				sales: action.payload.sales,
				loading: false,
			};
		default:
			return state;
	}
};

export default rootReducer;
