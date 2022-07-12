import board
import sdioio
import storage

sd = sdioio.SDCard(
    clock=board.SDIO_CLOCK,
    command=board.SDIO_COMMAND,
    data=board.SDIO_DATA,
    frequency=25000000)
vfs = storage.VfsFat(sd)
storage.mount(vfs, '/sd')

with open("/sd/test.txt", "w") as f:
    f.write("Hello world!\r\n")

with open("/sd/test.txt", "a") as f:
    f.write("This is another line!\r\n")

with open("/sd/test.txt", "r") as f:
    print("Read line from file:")
    print(f.readline())

with open("/sd/test.txt", "r") as f:
    print("Printing lines in file:")
    line = f.readline()
    while line != '':
        print(line)
        line = f.readline()


with open("/sd/test.txt", "r") as f:
    lines = f.readlines()
    print("Printing lines in file, one at a time:")
    for line in lines:
        print(line)


