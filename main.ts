basic.forever(function () {
    if (edubitIrBit.isIrSensorTriggered()) {
        edubitRgbBit.showColor(0x000000)
        basic.pause(randint(0, 10))
        edubitRgbBit.showColor(0x999999)
        basic.pause(randint(0, 10))
        edubitRgbBit.showColor(0xffffff)
        basic.showString(" Wow get lighter and lighter")
        // !
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . # . .
            . . . . .
            `)
    }
})
