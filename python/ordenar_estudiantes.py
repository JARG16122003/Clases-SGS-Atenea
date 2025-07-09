estudiantes = []

cantidad = int(input("¿Cuántos estudiantes vas a ingresar? "))

for i in range(cantidad):
    nombre = input(f"Ingrese el nombre del estudiante {i + 1}: ")
    edad = int(input(f"Ingrese la edad de {nombre}: "))
    estudiantes.append({"nombre": nombre, "edad": edad})

estudiantes_ordenados = sorted(estudiantes, key=lambda e: e["edad"])
resultado = [f'{e["nombre"]} - {e["edad"]} años' for e in estudiantes_ordenados]
for r in resultado: 
    print(r) 