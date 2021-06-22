import cv2
#img = cv2.imread("0.jpg")
#cv2.imshow("sample",img)
#cv2.imwrite("sample_save.jpg",img)
#cv2.waitKey(0)
#cv2.destroyAllWindow()

img = cv2.imread("5.jpg")
print(img.shape)
print(img.size)
print(img.dtype)

grayImg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
cv2.imwrite("GrayImage.jpg",grayImg)

