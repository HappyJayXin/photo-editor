import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import reducerKey from '@/constants/reducerKey';

type WindowDimensions = {
  width: number;
  height: number;
};

type CommonState = {
  windowDimensions: WindowDimensions;
  isToolSetting: boolean;
};

const initialState: CommonState = {
  windowDimensions: { width: 0, height: 0 },
  isToolSetting: false,
};

export const commonSlice = createSlice({
  name: reducerKey.COMMON,
  initialState,
  reducers: {
    setWindowDimensions(state, action: PayloadAction<WindowDimensions>) {
      state.windowDimensions = action.payload;
    },
    toggleToolSetting(state, action: PayloadAction<boolean>) {
      state.isToolSetting = action.payload;
    },
  },
  extraReducers: {},
});

export const commonActions = {
  ...commonSlice.actions,
};

export default commonSlice.reducer;
