// src/hooks/useTypedSelector.ts
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { AppState } from "../state/reducers";

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;