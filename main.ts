input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("REVERSE")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("LEFT")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("LEFT")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("BREAKE")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("FORWARD")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("RIGHT")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("REVERSE")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("RIGHT")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("BREAKE")
})
radio.setGroup(1)
basic.forever(function () {
	
})
