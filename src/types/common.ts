export type ChildrenProps = {
  children: React.ReactNode;
};

export type EventCallback<T1 = any, T2 = void> = {
  (param1: T1): T2;
};

export type TFunction = (key: string) => string;

export type ApiResponse<T> = {
  data: T;
};

export type DangerouslySetInnerHTML = {
  __html: string;
};

export type FileInfo = {
  id: string;
  dataUrl: string;
  setTings: Record<string, string>;
};
