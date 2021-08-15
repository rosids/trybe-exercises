def fuel_price(fuel, liters):
    """
    Alcohol:
      - Up to 20 liters, 3% discount per liter;
      - Above 20 liters, 5% discount per liter.
    Gasoline:
      - Up to 20 liters, 4% discount per liter;
      - Above 20 liters, 6% discount per liter.
    Receive the amount of liters sold, the type of fuel
    (coded in: A - alcohol, G - gasoline) and return the amount to be paid
    by the customer, knowing that the price of a liter of gasoline is R$ 2.
    50, and the price of a liter of alcoholic beverage is R$ 1.90.
    """
    fuel = fuel.upper()
    gasoline_price = 2.50
    alcohol_price = 1.90
    check_fuel_type = fuel == "A" or fuel == "G"

    if not check_fuel_type:
        return "Digite A para Álcool ou G para gasolina"

    if fuel == "A":
        if liters <= 20:
            return liters * (alcohol_price - (alcohol_price * 0.03))
        else:
            return liters * (alcohol_price - (alcohol_price * 0.05))

    if fuel == "G":
        if liters <= 20:
            return liters * (gasoline_price - (gasoline_price * 0.04))
        else:
            return liters * (gasoline_price - (gasoline_price * 0.06))


if __name__ == "__main__":
    print(fuel_price("b", 20))
    print(fuel_price("A", 20))
    print(fuel_price("A", 21))
    print(fuel_price("G", 20))
    print(fuel_price("G", 21))
