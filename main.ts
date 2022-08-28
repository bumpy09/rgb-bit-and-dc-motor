basic.forever(function () {
    if (edubitIrBit.isIrSensorTriggered()) {
        edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Backward, 1)
        edubitRgbBit.showColor(0x000000)
        edubitRgbBit.showColor(0x999999)
        edubitRgbBit.showColor(0xffffff)
        basic.showString(" Wow get lighter and lighter")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . # . .
            . . . . .
            `)
    }
})
