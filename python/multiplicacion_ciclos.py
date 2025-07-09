numero = int(input("ingrese el numero a multiplicar: "))
multiplicacion = 0

print("dependiendo de la opcion del 1 al 3 elija: ")
print("1 - For")
print("2 - While")
print("3 - Do While")

opcion = int(input(""))

match opcion:
    case 1:
        print("tabla del",numero)
        for i in range(1,11):
            multiplicacion = i * numero
            print(numero,"*", i,"=",multiplicacion)   
    case 2:
        print("tabla del",numero)
        i = 1
        while i <=10:
            multiplicacion = i * numero
            print(numero ,"*", i,"=",multiplicacion)
            i += 1
    case 3:
        print("tabla del",numero)
        i = 1
        while True:
            multiplicacion = i * numero
            print(numero,"*",i,"=",multiplicacion)
            i += 1
            if i > 10:
                break
    





