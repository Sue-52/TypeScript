// src/state/action-creators/packages.action.creators.ts
import axios from "axios";
import { Dispatch } from "react";
import { searchActionTypes } from "../action-types";
import { SearchAction } from "../actions";

export const searchPackages =
  (key: string) => async (dispatch: Dispatch<SearchAction>) => {
    dispatch({
      type: searchActionTypes.SEARCH_PACKAGES,
    });
    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: key,
          },
        }
      );
      dispatch({
        type: searchActionTypes.SEARCH_PACKAGES_SUCCESS,
        payload: data.objects.map((item: any) => item.package.name),
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: searchActionTypes.SEARCH_PACKAGES_FAILURE,
          error: error.message,
        });
      }
    }
  };

// unknow 是更加严格的 any 类型.
// 在对 unknown 类型的值执行大多数操作之前, 我们必须进行某种形式的检查