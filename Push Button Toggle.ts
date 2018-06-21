// **********************************************************
// Push Button Toggle Switch | MakerBit Example Code
// 
// To demonstrate using code to make a simply push button
// function as a toggle switch.
//
// Target: MakeCode Javascript editor for micro:bit
//
// David Sparks     June 21, 2018
// **********************************************************
//
// Declare variables
let LEDstate = 0
let ButtonState = 0
// 
// Setup
pins.digitalWritePin(DigitalPin.P16, 0)
ButtonState = pins.digitalReadPin(DigitalPin.P8)
LEDstate = 0
// 
// Loop
basic.forever(() => {
    ButtonState = pins.digitalReadPin(DigitalPin.P8)
    // Check the button state. Act only if it is LOW,
    // indicating button is being pushed down.
    if (ButtonState <= 0) {
        // The button has been pushed down. Reverse the state
        // of the LED and save the state in a variable.
        if (LEDstate == 0) {
            LEDstate = 1
            pins.digitalWritePin(DigitalPin.P16, 1)
        } else {
            LEDstate = 0
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
        // Wait for button to be released.
        while (ButtonState <= 0) {
            ButtonState = pins.digitalReadPin(DigitalPin.P8)
        }
    }
})
