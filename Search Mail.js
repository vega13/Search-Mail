var log = console.log.bind(console)

var time = function() {
    var date = new Date()
    var seperator1 = "-"
    var seperator2 = ":"
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
        month = "0" + month
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 +
                        strDate + " " + date.getHours() + seperator2 +
                        date.getMinutes() + seperator2 + date.getSeconds()
    return currentdate
}

var e = function(sel) {
    return document.querySelector(sel)
}

var submitClick = function() {
    submit.click()
}

var load = function(i) {
    input.value = i + templet
    // log('click', time(), input.value)
    submitClick()
}

var sleep = function(i, interval) {
    setTimeout(function() {
        autoClick(i)
    }, interval)
}

var autoClick = function(i) {
    var text = e('#promptContainer')
    if (i < end) {
        var next = i + 1
        var t = interval

        if (text == null && mark == 0) {
            mark += 1
            log('开始', startTime)
        } else if (text == null || text.innerText == '系统处理中，请稍候......') {
            miss += 1
            next = i
            i = i - 1
            t = reinterval
            if (text == null) {
                log('没有响应', i, time())
            } else {
                // log('miss', i, text.innerText)
            }
        } else {
            mark += 1
            // log(i - 1, mark, text.innerText)
        }
        load(i)
        sleep(next, t)
    } else {
        endTime = time()
        log(`结束, start：${startTime} end：${endTime} \nmissing：${missing}` +
            `\nsearch：${end - start} \ninterval：${interval} \nreinterval：${reinterval}`)
    }
    if (mark == 1000) {
        log(`丢失率为：${miss / 1000} ${time()}`)
        missing += miss
        miss = 0
        mark = 0
    }
}

var __main = function() {
    autoClick(start)
}

var input = e(".input_txt")
var submit = e('.submit')
var templet = "27@qq.com"
var interval = 150
var reinterval = 200
var missing = 0
var miss = 0
var mark = 0
var step = 10000
var startTime = time()
var endTime = time()
var start = 617 * step
var end = 620 * step

// 遍历到 999 * 10000为止，一次测 1 * 10000份
__main()
