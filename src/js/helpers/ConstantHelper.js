
class ConstantHelper {
  static getListItem(list, key, value, defaultValue = null) {
    if (list && list.length > 0) {
      for (let i = 0, ni = list.length; i < ni; i++) {
        const item = list[i];
        if (item[key] === value) {
          return item;
        }
      }
    }
    return defaultValue;
  }

  static getItem(object, key) {
    if (object[key]) {
      return object[key];
    }
    return null;
  }

  static getItemByField(list, field, value) {
    for (let i = 0, ni = list.length; i < ni; i++) {
      const item = list[i];
      if (item[field] === value) {
        return item;
      }
    }
    return null;
  }
}

export default ConstantHelper;
