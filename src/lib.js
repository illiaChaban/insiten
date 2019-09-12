/**
 * Flatten a multidimensional object
 * Don't flatten arrays
 *
 * var 
 * For example:
   var o = {
    a: 2, 
    b: {
      c: 3,
      d: {
        e: 4
      }
    },
    k: [ [1,2], [3] ]
  }
 *   flattenObject({ a: 1, b: { c: 2 } })
 * Returns:
 *   {a: 2, c: 3, e: 4, k: [ [1,2], [3]]}
 */
export const flattenObject = (obj) => {
  const flattened = {}

  Object.keys(obj).forEach( key =>  {
    const val = obj[key];
    const isHashmap = typeof val === 'object' 
                      && val !== null 
                      && !Array.isArray(val);

    if (isHashmap) {
      Object.assign(flattened, flattenObject(val));
    } else {
      flattened[key] = val;
    }
  });

  return flattened
};


let id = 0;
export const generateId = () => ++id;