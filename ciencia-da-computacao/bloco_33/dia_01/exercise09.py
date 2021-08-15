def sum_numbers(number):
    """
    Take an integer N and return the sum of all numbers 1 through N. For
    example, for N = 5, the expected value will be 15.
    """
    return sum(range(1, number + 1))


if __name__ == "__main__":
    print(sum_numbers(5))
