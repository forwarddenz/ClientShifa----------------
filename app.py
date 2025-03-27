# import numpy as np
# from scipy.optimize import minimize

# def objective_function(x):
#     return x**4 - 4*x**2 + 1

# x0 = np.array([1.0])
# result = minimize(objective_function, x0)

# x_min = result.x[0]
# print(x_min)

import sympy
from sympy import Symbol
from sympy.calculus.util import minimum, maximum

x = Symbol('x')

y = x**4 - 4*x**2 + 1

minimum_val = minimum(y, x)
print(minimum_val)

maximum_val = maximum(y, x)
print(maximum_val)