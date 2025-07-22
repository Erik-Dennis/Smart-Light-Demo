#!/bin/python
import RPi.GPIO as GPIO
from time import sleep as delay

def LEDOn():
    GPIO.output(5, True)
    delay(1)
    

def LEDOff():
    GPIO.output(5, False)
    delay(1)


GPIO.setmode(GPIO.BOARD)
GPIO.setup(5, GPIO.OUT)
LEDOff()

while True:
    clicked = input("type on, off, or exit: \n")

    if clicked == "on":
        LEDOn()
        print("on")
    elif clicked == "exit":
        GPIO.cleanup()
        print("exit")
        quit()
    elif clicked == "off":
        LEDOff()
        print("off")



