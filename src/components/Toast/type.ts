export type AppearanceTypes = 'info' | 'success' | 'warning';

export type Placement = 'bottom-center' | 'center';

export type ToastOption = {
  appearance: AppearanceTypes;
  placement: Placement;
  autoDismissTimeout: number;
  closeButton?: boolean;
  title?: string;
};

export type Toast = ToastOption & {
  id: number;
  content: string;
};

export type ToastContextProps = {
  addToast: (content: Toast['content'], props?: Partial<ToastOption>) => void;
  removeToast: (id: Toast['id']) => void;
};
