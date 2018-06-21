// ******************************************************
// Push button with pull-up resistor | MakerBit example
// 
// To demonstrate using a micro:bit with the push-button
// module in the 37-Sensors kit by Elegoo.
// The module has a built-in pull-up resistor, so
// the signal pin is HIGH when the button is NOT pressed.
// Pressing the button grounds the signal pin to LOW.
// 
// David Sparks June 21, 2018
// ***************************************************
//
// Setup
let ButtonState = 0
ButtonState = pins.digitalReadPin(DigitalPin.P8)
pins.digitalWritePin(DigitalPin.P16, 0)
// Loop
basic.forever(() => {
    ButtonState = pins.digitalReadPin(DigitalPin.P8)
    if (ButtonState > 0) {
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
