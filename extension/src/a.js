 

const win = {}

const reg = /.*(\d{8}).*/

win.__compareKey = function (cache, curr) {
    if (cache === curr)
        return true
    ///thread-6638382-
    if (reg.test(cache))
        return cache.replace(reg, "$1") === curr
    return false
}
win.fixValue = function (value) {
    if (reg.test(value))
        return value.replace(reg, "$1")
    return value
}

console.log(win.fixValue('/thread-66463257-1-5.html'))