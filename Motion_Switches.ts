// ****************************************************************
// Motion Switches  |  MakerBit Example Code
// To demonstrate using a micro:bit controller with the 
// Tilt, Shock, and Tap modules in the 37 Sensors Kit V 2.0
// from Elegoo
//
//
// Turn off the LED at the Start
pins.digitalWritePin(DigitalPin.P16, 0)
// The main loop checks the switch connected to pin P8
// and operates the LED.
basic.forever(() => {
    if (pins.digitalReadPin(DigitalPin.P8) >= 1) 
    {
        // the switch closes when the module detects motion
        // turn on the LED
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(200)
    } 
    else 
    {
        // the switch opens when the module is not sensing motion
        // turn off the LED
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(200)
    }
})
