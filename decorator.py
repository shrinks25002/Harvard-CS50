def announce(f):
    def wrapper():
        print("Start function")
        f()
        print("End function")
    return wrapper

@announce
def hello():
    print("Hello world")

hello()