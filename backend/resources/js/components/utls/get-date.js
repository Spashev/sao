/**
 * Вытаскивает дату в формате "2019-12-31" из переданной даты
 *
 * @param {Date} date
 * @return {string} Форматирует дату в формате "2019-12-31"
 */

export const getDate = (date = null, string = true) => {
    const d = date ? new Date(date) : new Date();
    const mon = '0' + (d.getMonth() + 1);
    const day = '0' + d.getDate();
    return string
      ? [d.getFullYear(), mon.substr(-2), day.substr(-2)].join('-')
      : { day: day.substr(-2), month: mon.substr(-2), year: d.getFullYear() };
  };
  
  /**
   * Вытаскивает дату в формате "2019-12-31" из переданной даты и отнимает (decrement) количество дней
   *
   * @param {Integer} decrement
   * @param {Date} date
   * @return {string} Форматирует дату в формате "2019-12-31"
   */
  
  export const getDateDecrement = (decrement = 1, date = null, string = true) => {
    const d = date ? new Date(date) : new Date();
    d.setDate(d.getDate() - decrement);
    const mon = '0' + (d.getMonth() + 1);
    const day = '0' + d.getDate();
  
    return string
      ? [d.getFullYear(), mon.substr(-2), day.substr(-2)].join('-')
      : { day: day.substr(-2), month: mon.substr(-2), year: d.getFullYear() };
  };