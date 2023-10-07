# Design Pattern

1. factory mode

```python
class Factory:
    def create(self, type):
        if type == "A":
            return A()
        elif type == "B":
            return B()
        else:
            return None

class A:
    def __init__(self):
        print("A")

class B:
    def __init__(self):
        print("B")

if __name__ == "__main__":
    factory = Factory()
    a = factory.create("A")
    b = factory.create("B")
```