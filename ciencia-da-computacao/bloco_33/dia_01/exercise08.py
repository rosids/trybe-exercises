def right_triangle_asterisks(number):
    """
    Given a value of any such that n> 1, prints a right triangle with 5
    basic asterisks on the screen.
    """
    for asterisk in range(1, number + 1):
        print("*" * asterisk)
    return ""


if __name__ == "__main__":
    print(right_triangle_asterisks(5))
