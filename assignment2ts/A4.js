"use strict";
var chatroom1 = new Map();
chatroom1
    .set("user 1", "hello i am user 1")
    .set("user 2", "hello i am user 2")
    .set("user 3", "hello i am user 3");
var chatroom2 = new Map([
    ["user 4", "hello i am user 4"],
    ["user 5", "hello i am user 5"],
    ["user 6", "hello i am user 6"],
]);
for (let [key, value] of chatroom1.entries()) {
    console.log(`${key} = ${value}`);
}
for (let [key, value] of chatroom2.entries()) {
    console.log(`${key} = ${value}`);
}
//# sourceMappingURL=A4.js.map