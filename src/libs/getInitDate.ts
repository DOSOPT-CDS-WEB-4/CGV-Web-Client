export const getInitDate = () => {
  const todayDate = new Date();
  const initDate =
    todayDate.getFullYear() +
    '.' +
    (todayDate.getMonth() + 1) +
    '.' +
    todayDate.getDate().toString().padStart(2, '0');

  return initDate;
};
