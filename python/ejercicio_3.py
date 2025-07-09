import random

numero = random.randint(1,10);

if numero < 5:
    print("el numero es menor a 5");
elif numero == 5:
    print("el numero es igual a 5");
else:
    print("el numero es mayor a 5");


if numero > 5 and numero % 2 == 0:
    print("El número es mayor a 5 y es par");
else:
    print("El número no cumple ambas condiciones");

for i in range(1,10):
    print(f"el cuadrado de {i} es:",i**2);

i = 1;

while i <= 5:
    if i == 4:
        break
    print(i)
    i+= 1



