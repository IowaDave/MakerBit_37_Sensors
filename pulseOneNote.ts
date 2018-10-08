//**********************************************************
// pulseOneNote - JavaScript code to beep a single
// tone using the passive piezo buzzer from the
// 37 Sensors kit by Elegoo, connected to Roger Wagner's
// MakerBit. Paste this code into the JavaScript view
// of the programming web site micrmicro:bit  Roger Wagner's
// MakerBit.
//
// David Sparks  October 2018
//
// Paste this code into the JavaScript view of the online
// programming tool at https://makecode.microbit.org/
//**********************************************************
// startup code runs just one time
// this part creates the variables
let intervalBetweenClicks = 0
let microSecondsInACycle = 0
let pitchFrequency = 0
let soundTime = 0
let noteDuration = 0
//
// this part initializes two variables. Change them to see what happens.
noteDuration = 500000 // pulse every 1/2 second.
pitchFrequency = 440 // sets the pitch of the note.
//
// this part calculates how to play the the tone 
// based on the pitchFrequency.
microSecondsInACycle = 1000000 / pitchFrequency
intervalBetweenClicks = microSecondsInACycle / 2
//
// main program loop runs repeatedly
basic.forever(() => {
    soundTime = noteDuration
    while (soundTime > 0) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        control.waitMicros(intervalBetweenClicks)
        pins.digitalWritePin(DigitalPin.P5, 0)
        control.waitMicros(intervalBetweenClicks)
        soundTime = soundTime - microSecondsInACycle
    }
    control.waitMicros(noteDuration)
})

  
