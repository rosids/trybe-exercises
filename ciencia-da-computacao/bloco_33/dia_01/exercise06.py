def check_triangle(side1, side2, side3):
    """
    Receive the three sides of a triangle and inform which type of triangle
    was formed or "not a triangle", if it is not possible to form a triangle
    """
    is_triangle = (
        side1 + side2 > side3
        and side1 + side3 > side2
        and side2 + side3 > side1
    )

    equilateral_triangle = side1 == side2 and side1 == side3
    isosceles_triangle = side1 == side2 or side2 == side3 or side1 == side3

    if not is_triangle:
        return "não é triângulo"

    if equilateral_triangle:
        return "Triângulo Equilátero"
    elif isosceles_triangle:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


if __name__ == "__main__":
    print("Lados: 6, 5, 0", check_triangle(6, 5, 0))
    print("Lados: 4, 4, 4", check_triangle(4, 4, 4))
    print("Lados: 4, 4, 2", check_triangle(4, 4, 2))
    print("Lados: 4, 6, 6", check_triangle(4, 6, 6))
    print("Lados: 4, 2, 4", check_triangle(4, 2, 4))
    print("Lados: 4, 3, 2", check_triangle(4, 3, 2))
