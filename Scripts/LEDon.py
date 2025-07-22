#!/bin/python
import RPi.GPIO as GPIO
from time import sleep as delay

def LEDOn():
    GPIO.output(5, True)
    delay(.1)
GPIO.setwarnings(False)
GPIO.cleanup()
GPIO.setmode(GPIO.BOARD)
GPIO.setup(5, GPIO.OUT)

LEDOn()
print("LED On\n")
quit()
