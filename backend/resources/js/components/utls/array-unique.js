export default array => {
  const checkUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  return array.filter(checkUnique);
};
