import { searchActionTypes } from "../action-types";

// 请求等待中接口
interface SearchPackagesAction {
  type: searchActionTypes.SEARCH_PACKAGES;
}

// 请求成功接口
interface SearchPackagesSuccessAction {
  type: searchActionTypes.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

// 请求失败接口
interface SearchPackagesFailureAction {
  type: searchActionTypes.SEARCH_PACKAGES_FAILURE;
  error: string;
}

// 到处所有接口
export type SearchAction =
  SearchPackagesAction |
  SearchPackagesSuccessAction |
  SearchPackagesFailureAction;