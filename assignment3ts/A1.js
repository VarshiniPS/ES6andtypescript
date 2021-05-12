"use strict";
const promise1 = Promise.resolve(3);
const promise2 = 5;
Promise.all([promise1, promise2]).then((values) => {
    const total = values.reduce((p, c) => p + c);
    console.log(total);
});
//# sourceMappingURL=A1.js.map