numero = int(input("ingrese un numero: "))

if numero > 1:
    for i in range(2, int(numero ** 0.5) + 1):
        if numero % i == 0:
            print("no es un numero primo")
            break
        else:
            print("es un numero primo")
else:
    print("no es primo")

