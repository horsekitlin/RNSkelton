import reduce from 'lodash/reduce';
export const toCamelStyle = (actionType) =>
  actionType.toLowerCase().replace(/[^a-z]{1}(\w)/g, function (all, matched) {
    return matched.toUpperCase();
  });

export const toSearchItems = (
  options,
  defaultValue = [{value: 'All', name: '全部'}],
) =>
  reduce(
    options,
    (result, name, value) => [
      ...result,
      {
        value,
        name,
      },
    ],
    defaultValue,
  );

export const toNumberFormat = (number) => {
  return new Intl.NumberFormat('nu').format(number);
};
