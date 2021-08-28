def smallest_number(numbers):
    """
    Given a list, find the smallest element. For example,
    [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] should return 2.
    """
    smaller_number = numbers[0]
    for number in numbers:
        if number < smaller_number:
            smaller_number = number
    return smaller_number


if __name__ == "__main__":
    print(
        "Lista: [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], menor número:",
        smallest_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]),
    )
    print(
        "Lista: [2, 9, 3, 19, 70, 8, 10, 2, 35, 1], menor número:",
        smallest_number([2, 9, 3, 19, 70, 8, 10, 2, 35, 1]),
    )
