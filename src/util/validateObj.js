export function checkObjectValues(stringsArray, obj) {
    for (const item of stringsArray) {
      if (
        !obj[item.key] ||
        (Array.isArray(obj[item.key]) && obj[item.key].length === 0)
      ) {
        return { success: false, because: item.name };
      }
    }
    return { success: true };
  }