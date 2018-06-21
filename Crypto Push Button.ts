// *************************************************************
// Crypto Push Button | MakerBit Example Code
// 
// Demonstrates coding to make a simple push button
// require a user code to activate a switch.
// The code counts the number of button presses in a short time. 
//
// Target: MakeCode Javascript editor for micro:bit
// 
// David Sparks   June 21, 2018
// *************************************************************
// 
// Declare variables
let theInterval = 0
let LED_on_off = 0
let theCount = 0
let endTime = 0
let pin8_Status = 0
let startTime = 0
let clickDetected = 0
// 
// Define function to detect button presses
function detectClick()  {
    clickDetected = 0
    pin8_Status = pins.digitalReadPin(DigitalPin.P8)
    while (pin8_Status <= 0) {
        clickDetected = 1
        pin8_Status = pins.digitalReadPin(DigitalPin.P8)
    }
}
// 
// Define function to count button presses
function countClicks()  {
    startTime = input.runningTime()
    endTime = startTime + theInterval
    theCount = 0
    while (input.runningTime() < endTime) {
        detectClick()
        if (input.runningTime() < endTime) {
            if (clickDetected == 1) {
                theCount = theCount + 1
            }
        }
    }
}
// 
// Setup
pin8_Status = pins.digitalReadPin(DigitalPin.P8)
pins.digitalWritePin(DigitalPin.P16, 0)
//
// Loop
basic.forever(() => {
    if (LED_on_off == 0) {
        detectClick()
        if (clickDetected > 0) {
            theInterval = 1000
            countClicks()
            if (theCount == 1) {
                pins.digitalWritePin(DigitalPin.P16, 1)
                LED_on_off = 1
            }
        }
    }
    if (LED_on_off == 1) {
        detectClick()
        if (clickDetected > 0) {
            theInterval = 1000
            countClicks()
            if (theCount == 0) {
                pins.digitalWritePin(DigitalPin.P16, 0)
                LED_on_off = 0
            }
        }
    }
})
