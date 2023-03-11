export type DataCallback = (data: any) => void;

export interface CallbackInterface {
  id: string;
  callback: DataCallback;
}
const callbacks: CallbackInterface[] = [];

type SetCallbackPropsType = CallbackInterface & {
  options?: {
    leading?: boolean;
  };
};

export const setCallback = ({
  id,
  callback,
  options = { leading: false },
}: SetCallbackPropsType) => {
  const isLeading = options.leading;

  const index = callbacks.findIndex((item) => item.id === id);

  if (index === -1) {
    callbacks.push({ id, callback });
  } else {
    if (!isLeading) {
      callbacks.splice(index, 1, { id, callback });
    }
  }
};

export const getCallback = ({ id }: { id: string }) => {
  return callbacks.find((item) => item.id === id);
};

export const deleteCallback = ({ id }: { id: string }) => {
  const index = callbacks.findIndex((item) => item.id === id);

  if (index === -1) {
  } else {
    callbacks.splice(index, 1);
  }
};
