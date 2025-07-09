print("Bienvenido a la cafeteria") 
print("que desea tomar?") 
print("1. Café - $4.000") 
print("2. Té - $3.000") 
print("3. Chocolate - $4.500")
print("4. Aromatica - $1.500")
print("5. Malteada - $10.500") 
opcion = input("Seleccione una opción (1-5): ") 
 
if opcion == "1": 
    print("Has elegido Café. Precio: $4.000") 
elif opcion == "2": 
    print("Has elegido Té. Precio: $3.000") 
elif opcion == "3": 
    print("Has elegido Chocolate. Precio: $4.500") 
elif opcion == "4":
    print("Has elegido Aromatica. Precio: $1.500")
elif opcion == "5":
    print("Has elegido Malteada. Precio: $10.500")
else: 
    print("Opción no válida. Por favor, selecciona una bebida del menú.") 