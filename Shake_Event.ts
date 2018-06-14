/*****************************************
 * MakerBit Example Detect Shake Event   *
 * David Sparks  June 14, 2018           * 
 * Lights an LED connected to Pin P16    * 
 * for 1/2 of a second                   *
 * after micro:bit raises a Shake event. *
 *****************************************/
input.onGesture(Gesture.Shake, () => {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(() => {

})
