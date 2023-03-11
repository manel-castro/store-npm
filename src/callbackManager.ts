export interface DataInterface {
  id: string;
  data: any;
}
const dataStorage: DataInterface[] = [];

type SetDataPropsType = DataInterface & {
  options?: {
    leading?: boolean;
    namespace?: string;
    unicity: true;
  };
};
/**
 * Todo:
 * Improve versatility for non-unicity, and get return all coincidences
 */
export const setData = ({
  id,
  data,
  options = { leading: false, namespace: "", unicity: true },
}: SetDataPropsType) => {
  const isLeading = options.leading;
  const isUnicity = options.unicity; // To implement
  const namespace = options.namespace;

  if (namespace) id = id + namespace;

  const index = dataStorage.findIndex((item) => item.id === id);

  if (!isUnicity || index === -1) {
    dataStorage.push({ id, data });
  } else {
    if (!isLeading) {
      dataStorage.splice(index, 1, { id, data });
    }
  }
};

export const getData = ({ id }: { id: string }) => {
  return dataStorage.find((item) => item.id === id);
};

export const deleteData = ({ id }: { id: string }) => {
  const index = dataStorage.findIndex((item) => item.id === id);

  if (index === -1) {
  } else {
    dataStorage.splice(index, 1);
  }
};
