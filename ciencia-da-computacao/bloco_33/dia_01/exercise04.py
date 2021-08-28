def biggest_name(names):
    """
    Receive a list of names and return the name with more characters
    """
    bigger_name = ""
    for name in names:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name
