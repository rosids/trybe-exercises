def arithmetic_average_list(numbers):
    """
    Calculates the arithmetic mean of a list
    """
    sum = 0
    for item in numbers:
        sum += item
    return sum / len(numbers)
