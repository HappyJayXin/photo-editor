import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import reducerKey from '@/constants/reducerKey';
import type { FileInfo } from '@/types/common';

type FileState = {
  info: FileInfo | null;
};

const initialState: FileState = {
  info: null,
};

export const fileSlice = createSlice({
  name: reducerKey.FILE,
  initialState,
  reducers: {
    setFileInfo(state, action: PayloadAction<FileInfo>) {
      state.info = action.payload;
    },
  },
  extraReducers: {},
});

export const fileActions = {
  ...fileSlice.actions,
};

export default fileSlice.reducer;
