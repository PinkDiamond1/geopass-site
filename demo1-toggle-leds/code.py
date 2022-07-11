import board
import digitalio
import time

led = digitalio.DigitalInOut(board.LED0)
led.direction = digitalio.Direction.OUTPUT

led2 = digitalio.DigitalInOut(board.LED1)
led2.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    led2.value = False
    time.sleep(0.5)
    led.value = False
    led2.value = True 
    time.sleep(0.5)

