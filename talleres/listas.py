frutas = ["manzana", "pera", "piña", "fresas", "bananos"]
for fruta in frutas:
    print(fruta)

print("frutas modificadas")
frutas[2] = "kiwi"
print("eliminando segunda fruta")
frutas.remove("pera")
print("frutas finales")
for fruta in frutas:
    print (fruta)