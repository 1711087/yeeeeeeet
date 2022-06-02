basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(262, music.beat(BeatFraction.Half))
})
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            # # . # #
            # . . . #
            # # . # #
            . # # # .
            `)
        basic.showLeds(`
            . # # # #
            # # . # #
            # . . . #
            # # . # #
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            . # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # # #
            # # . # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . # # #
            # # . # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        // 
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
