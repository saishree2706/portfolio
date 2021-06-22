import cv2
import imutils #for resizing etc

img = cv2.imread("5.jpg")
#resizeImg = imutils.resize(img, width=20)

gaussianImg = cv2.GaussianBlur(img, (21,21), 0)

cv2.imwrite("gaussianImg.jpg", gaussianImg)
