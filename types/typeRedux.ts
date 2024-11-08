import {
     useDispatch,
     useSelector,
     TypedUseSelectorHook,
} from "react-redux";
import { RootState, AppDispatch } from "@/types/redux/store";

export const useAppDispatch: () => AppDispatch =
     useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
     useSelector;
