# FindRefuge
FindRefuge is an international locater web page.



<!-- ABOUT FindRefuge -->
## About FindRefuge
FindRefuge is a Google Maps API project that helps refugees search for refugee shelters and organisations near them. From a list of addresses of the shelters and organisations, refugees can select an address based on the country they are seeking refuge in. Users are shown the location Pin, directions to the location and Street View using Google Maps.

<!-- GETTING STARTED -->
## Getting Started

FindRefuge uses Google Maps API and an API key is required.

### Get the API key

1. Go to [Google Clouds Console](https://console.cloud.google.com)
2. Click the project drop-down and select or create the project for which you want to add an API key.
3. Click the menu button and select **Google Maps Platform > Credentials** .
4. On the **Credentials** page, click **+Create Credentials > API key**.
5. The **API key created** dialog displays the newly created **API key**.
6. Click **Close**. The new API key is listed on the `Credentials` page under **API Keys**.

### Installation/Running FindRefuge
1. Clone the repo:
   ```sh
   git clone https://github.com/zing-y/FindRefuge.git
   ```
2. In `app.py`, `index.html` and `index.js`, 
   
   replace `<port>` with a port number of your choice and `<key>` with your `API key`.

3. Open two command terminals.
   
4. Excecute in the first command terminal:
   ```py
   python app.py
   ```

5. Excecute in the second command terminal:
   ```py
   python -m http.server --cgi <port>
   ```

6. Open in Chrome: 
   ``` 
   http://localhost:<port>/
   ```

NOTE: Replace `<port>` with the port number chosen

## Built with

[Python](https://www.python.org/downloads/), [Flask](https://pypi.org/project/Flask/), [JavaScript](https://www.w3schools.com/js/), [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/css/), [jQuery](https://www.w3schools.com/jquery/),[Google Maps Platform](https://developers.google.com/maps)

## Acknowledgement

Abhinav Kumar - [Integrating Google Maps API using Python and JavaScript](https://towardsdatascience.com/integrating-google-maps-api-using-python-and-javascript-149fdba27b99)

##

####  Made for Hack&Roll 2022

