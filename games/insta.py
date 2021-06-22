import cv2
import numpy as np
num_d = 2
num_bi = 7
img_rgb = cv2.imread("2.jpg")
print(img_rgb.shape)
img_rgb = cv2.resize(img_rgb,(800,800))

img_color = img_rgb
for _ in range(num_d):
    img_color = cv2.pyrDown(img_color)


img_color = img_rgb
for _ in range(num_d):
    img_color = cv2.pyrDown(img_color)

for _ in range(num_d):
    img_color = cv2.pyrUp(img_color)

img_gray = cv2.cvtColor(img_rgb, cv2.COLOR_RGB2GRAY)
img_blur = cv2.medianBlur(img_gray, 7)

img_edge = cv2.adaptiveThreshold(img_blur, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, blockSize=9, C=2)

img_edge = cv2.cvtColor(img_edge, cv2.COLOR_GRAY2RGB)
img_cartoon = cv2.bitwise_and(img_color, img_edge)

cv2.imshow('img ', img_cartoon)
stack = np.hstack([img_rgb, img_cartoon])
#cv2.imshow('Stacked images', stack)
cv2.waitKey(0)

cv2.imwrite("cartoon.jpg", img_cartoon)