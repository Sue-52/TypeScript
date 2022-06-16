import { searchActionTypes } from "../action-types";
import { SearchAction } from "../actions";

export interface PackagesState {
  loading: boolean;
  error: string | null;
  list: string[]
}

const initialState: PackagesState = {
  loading: false,
  error: null,
  list: []
}

function packagesReducer(
  state: PackagesState = initialState,
  action: SearchAction
): PackagesState {
  switch (action.type) {
    // 请求中...
    case searchActionTypes.SEARCH_PACKAGES:
      return {
        loading: true,
        error: null,
        list: []
      };
    // 请求成功
    case searchActionTypes.SEARCH_PACKAGES_SUCCESS:
      return {
        loading: false,
        error: null,
        list: action.payload
      };
    // 请求失败
    case searchActionTypes.SEARCH_PACKAGES_FAILURE:
      return {
        loading: false,
        error: action.error,
        list: []
      };
    default:
      return state;
  }
}

export default packagesReducer;