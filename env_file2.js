import numpy as np
import math
import matplotlib.pyplot as plt

h = 6.62607015E-34
c = 299792458
k = 1.380649E-23
T = 3600

Lambda = np.linspace(0.01, 5, 500) * 10**-6

def flux(h, c, Lambda, T, k):
    return ((2*math.pi*h*c**2) / (Lambda**5)) * 1/(math.e**( (h*c)/ (Lambda*k*T) ) -1)

plt.plot(Lambda, flux(h, c, Lambda, T, k))
plt.xlabel('Wavelength (µm)')
plt.ylabel('Flux (W/m^2)')

plt.gca().xaxis.set_major_formatter(plt.FormatStrFormatter('%.0f'))
plt.gca().yaxis.set_major_formatter(plt.FormatStrFormatter('%.0f'))

plt.show()