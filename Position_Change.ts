// ****************************************************************
// Position Change | MakerBit Code Example
//  
// Track the average value of pitch or roll obtained from the
// built-in micro:bit accelerometer over the prior 1/2 second.
// Turn on LED for 1/2 second after detecting difference of 
// more than 10 degrees in either axis compared to the average.
//  
// Copy and paste this code into the JavaScript side of the
// Microsoft MakeCode browser-based editor for micro:bit.
// 
// by David Sparks    June 14, 2018
// ****************************************************************
// 
// Declare variables used in the program
let averageRoll = 0
let averagePitch = 0
let arrayIndex = 0 // used to select specific values in arrays
let rolls: number[] = []
let pitches: number[] = []
// Declare named function 
function readRotation() {
    // update average pitch
    averagePitch = averagePitch * 5 - pitches[arrayIndex]
    pitches[arrayIndex] = input.rotation(Rotation.Pitch)
    averagePitch = (averagePitch + pitches[arrayIndex]) / 5
    // update average roll
    averageRoll = averageRoll * 5 - rolls[arrayIndex]
    rolls[arrayIndex] = input.rotation(Rotation.Roll)
    averageRoll = (averageRoll + rolls[arrayIndex]) / 5
    // update index into the pitch and roll arrays
    if (arrayIndex >= 4) {
        arrayIndex = 0
    } else {
        arrayIndex = arrayIndex + 1
        basic.pause(100)
    }
}
// This code appears in the Start block
let counter = 0
readingIndex = 0
rolls = [0, 0, 0, 0, 0]
pitches = [0, 0, 0, 0, 0]
for (counter = 0; counter < 5; counter++) {
    readRotation()
}
basic.forever(() => {
    if (Math.abs(averagePitch - input.rotation(Rotation.Pitch)) > 10 
    || Math.abs(averageRoll - input.rotation(Rotation.Roll)) > 10) 
    {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(500)
    } 
    else 
    {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    readRotation()
})
