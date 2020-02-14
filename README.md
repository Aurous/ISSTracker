International Space Station Tracker
=====

The tracking api utilizes [Open Notify](http://api.open-notify.org/), an [open source](https://github.com/open-notify/Open-Notify-API) project that drive two of the apis in this project.

[ISS-Location-Now](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) returns the current location of the International Space Station in latitude and longitude.


[People-In-Space](http://open-notify.org/Open-Notify-API/People-In-Space/) returns everyone who is currently in space with their name and what craft they are on.


The photos of the astronauts is being provided by NASA's Api [NASA Image and Video Library](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)

Using the astronauts name then filtering the search for portrait in the description of the data returns the images that show the astronauts.
______
React JS Frameworks used:
-----

[React](https://www.npmjs.com/package/react) - Main javascript framework


[@material-ui/core](https://www.npmjs.com/package/@material-ui/core) - Main style and content manager


[@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) - Icons used on people in space page


[material-ui-image](https://www.npmjs.com/package/material-ui-image) - Used to make world map resize in 16:9 ratio


[react-router-dom](https://www.npmjs.com/package/react-router-dom) - Enables app to have muiltiple pages easily


