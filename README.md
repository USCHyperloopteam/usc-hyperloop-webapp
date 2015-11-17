# Running Instructions
1. install node.js (https://nodejs.org/en/)
2. download and unzip application
3. navigate to application folder and run 'npm install'
4. run 'sails lift' in the same folder



## Specifics about our web-app

Currently, only live data is implemented on our web page, and we have not yet finished the analytics (but it will be done once we have real data)
We have the entire back-end framework for pushing to the database & updating the dashboard set up and complete for all the tentative sensors.
We have the front-end hooked to our back end to update as we are given new data as well.
We have the API set-up for passing in JSON objects to our webapp, as well as managing the database (CRUD RESTful API).
Instructions to test all these will be detailed in the next section.

We also have a functional video stream ready to receive data from a given source; at the moment we have tested it and hooked it to our computer's webcam//phonecams.



### How to create/update/delete 'mock' elements to push to our database & display on the dash

To observe the full data-flow of our web-app, do the following:

1. Using our API, you can create, delete, or update any elements on our dash/in the database. We have the controllers and API's set up for all the tentative sensors.

⋅⋅* Because we have a CRUD API, we have 4 functions: create, read, update, and delete. Create lets you create a new entry, Read allows you to see all the entries for a given sensor variable,
	Update lets you edit an existing entry, and Delete lets you remove an existing entry.

⋅⋅* The syntax for doing this will be as follows:

	⋅⋅1. Create: :ROOTPATH/:MODEL/create?:PARAM1=:PARAM1ENTRY&:PARAM2=:PARAM2ENTRY&:PARAM3=:PARAM3ENTRY --- As many or as few params as you want

	⋅⋅2. Read: :ROOTPATH/:MODEL/

	⋅⋅3. Update: :ROOTPATH/:MODEL/update/:MODELID?:PARAM1=:PARAM1ENTRY&:PARAM2=:PARAM2ENTRY&:PARAM3=:PARAM3ENTRY --- As many or as few params as you want

	⋅⋅4. Delete: :ROOTPATH/:MODEL/destroy/:MODELID

⋅⋅* Entries formatted as :ALLCAPS are variable entries that should be filled with desired information.

⋅⋅* The :ROOTPATH variable is just the base, home URL that is in the URL bar as soon as you start up the app (generally, localhost:1337)

⋅⋅* Example: if I wanted to create an entry for the 'Yaw' sensor on our database, I would put in the URL "localhost:1337/Yaw/create?value=100"

⋅⋅* In this example, you can see I used "localhost:1337" as my :ROOTPATH variable, "Yaw" as my :MODEL variable, and "value" as my :PARAM1 and "100" as the :PARAM1ENTRY

⋅⋅* For our purposes, in the API we provide, all mock variables created must be given 'value' as a param EXCEPT position and velocity, (so always do ?value=SOMENUMBER for these entries)

⋅⋅* For position and velocity, use x, y, and z as params (so do ?x=SOMENUM&y=SOMENUM&z=SOMENUM)

⋅⋅* For purposes of not cluttering our databases with too much pseudo (mock) data before we are given real data, we have implemented this full data-flow
	for Yaw, Pitch, Roll, Velocity, Position, Battery, Wifi, and Power. We figured this would be enough proof of concepts, and we will need to flush fewer databases this way.
	(Also, there is still no guarantee on exactly which sensors we will have/need to record). All the code for other sensors is set up, but the front end will not update at the moment
	for the other sensor variables (you may still do all the CRUD operations on them, however).

2. Refresh the page and the latest received values should be displayed on the dash.
