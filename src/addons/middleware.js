export const print1 = (storeAPI) => (next) => (action) => {
    console.log('print1', storeAPI);
    return next(action)
} 