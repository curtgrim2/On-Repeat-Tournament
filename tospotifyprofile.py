from selenium import webdriver
from selenium.webdriver.edge.options import Options as EdgeOptions
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.edge.service import Service as EdgeService
from webdriver_manager.microsoft import EdgeChromiumDriverManager

#Update driver before starting

#updatedriver = EdgeChromiumDriverManager().install()

print("Lets test the web site")
tospotify = "https://open.spotify.com/playlist/37i9dQZF1Epw0NQnuYjgoR" #"https://open.spotify.com/" #input()

updatedriver = EdgeService(EdgeChromiumDriverManager().install())
driver = webdriver.Edge(service=updatedriver)

driver.get(tospotify)
input("Enter key to stop web driver")
driver.quit()
print("Complete")
