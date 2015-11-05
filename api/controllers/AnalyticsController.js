/** AnalyticsController **/
/*  The AnalyticsController is responsible for making requests for long-term 'past'  */
/*  data from the database and updating underlying graph/other data visualization    */
/*  models that uses database information. It also feeds the appropriate view        */
/*  (which displays these graph models/data-visualizations) to the browser           */


var AnalyticsController = function() {

	this.permissionToRun = false;
	/** \brief systemOff 														*/
	/*  systemOff will disable all API calls to other controllers, effectively  */
	/*  creating a static web app that will not update the views, models, or    */
	/*  database, regardless of API calls.                                      */
	/*  Useful if API calls are automated from the pod, so when pod is not in   */
	/*  competition, the web app may be 'turned off' so as not to collect       */
	/*  meaningless information.                                                */
	function disableAnalyticsController (req, res) {
		// Here we will have calls to public controller functions to switch on/off a boolean
		// within each controller that lets it know whether it has permission to run
	}

	/** \brief systemOn															*/
	/*  systemOn will enable all API calls to other controllers, effectively  */
	/*  creating a static web app that will not update the views, models, or    */
	/*  database, regardless of API calls.                                      */
	/*  Used to re-enable certain controllers   */
	/*  competition, the web app may be 'turned off' so as not to collect       */
	/*  meaningless information.                                                */
	function enableAnalyticsController (req, res) {
		// Here we will have calls to public controller functions to switch on/off a boolean
		// within each controller that lets it know whether it has permission to run
	}

	function postToDatabase (req, res) {
		// Put out 'request' data into the database. Return whether the put was successful or not.
		// If necessary, serve up a view for unsuccessful post
	}

	function fetchFromDatabase (req, res) {
		// Fetch 'request' data from database. If successful, store requested data into 'response', and if unsuccessful,
		// return a 'response' data with 'failure' data.


		// if (request.fetch == success) {
		return updateGraphModel (req, res);
		// }
		// else
		// 	return res;
	}

	function updateAnalyticsModel (req, res) {
		// Handles the actual logic 

	}

};


module.exports = AnalyticsController;
