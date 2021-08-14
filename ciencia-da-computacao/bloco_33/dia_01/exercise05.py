import unittest


def paint_quantity_total_price(meters):
    """
    Return two values in a tuple containing the number of paint cans to be
    purchased and the total price from the size of a wall (in m²)
    """
    price = 80
    liters = meters / 3
    paint_quantity = liters // 18
    if paint_quantity % 18:
        paint_quantity += 1
    return paint_quantity, paint_quantity * price


class test_paint_quantity_total_price(unittest.TestCase):
    def test_case(self):
        actual = paint_quantity_total_price(180)
        self.assertEqual(actual, (4, 320.0))


if __name__ == "__main__":
    unittest.main()
