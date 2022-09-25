import { commonActions } from '@/redux/slice/commonSlice';
import { fileActions } from '@/redux/slice/fileSlice';

export default {
  ...commonActions,
  ...fileActions,
};
