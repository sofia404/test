/*
 * @Descripttion: 
 * @version: 
 * @Author: voanit
 * @Date: 2020-10-27 15:10:31
 * @LastEditors: voanit
 * @LastEditTime: 2020-10-29 18:19:21
 */
const obj = {
    age: 19,
    gender: 'woman',
    occupation: 'engineer'
}

const arr = [0, 1, 2, 3]

console.log(Object.keys(arr))

const obj1 = {}
Object.defineProperty(obj1, 'name', {
    configurable: true,
    enumerable: true,
    get() {
        return name
    },
    set(newValue) {
        name = newValue
    }
})
console.log(obj1)
obj1.name = 'sofia404'
console.log(obj1.name)