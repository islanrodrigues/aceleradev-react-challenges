const sortList = (list = [], key) => {
    if (!list || list.length === 0) return [];
  
    return list.sort(({ [key]: a }, { [key]: b }) => {
      return isDate(a) ? b.localeCompare(a) : a.localeCompare(b);
    });
  };
  
  const isDate = date => {
    const tryConvertToDate = new Date(date);
    return tryConvertToDate instanceof Date && !isNaN(tryConvertToDate.getTime());
  };
  
  export default sortList;