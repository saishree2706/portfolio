import cv2
import imutils
img = cv2.imread("5.jpg")

grayimg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
threshImg = cv2.threshold(grayimg, 220, 255, cv2.THRESH_BINARY)[1]
cv2.imwrite("thresh.jpg", threshImg)
