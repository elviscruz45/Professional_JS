class perro:
    def __init__(self):
        self.name=20
        self.marcos="elviscocho"
    def casa(self):
        self.casaca=1000
        return 100
    
    def perros(self,c):
        return self.name*self.casa()

elvis=perro()

a=elvis.perros(10)
print(a)