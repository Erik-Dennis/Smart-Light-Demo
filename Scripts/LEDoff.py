#!/bin/python
import RPi.GPIO as GPIO
from time import sleep as delay
   

def LEDOff():
    GPIO.output(5, False)
    delay(.1)
GPIO.setwarnings(False)
GPIO.cleanup()
GPIO.setmode(GPIO.BOARD)
GPIO.setup(5, GPIO.OUT)

LEDOff()
print("LED Off\n")
quit()
