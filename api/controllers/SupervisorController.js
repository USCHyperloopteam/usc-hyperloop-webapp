var SupervisorController = function() {

	/** \brief systemOff 														*/
	/*  systemOff will disable all API calls to other controllers, effectively  */
	/*  creating a static web app that will not update the views, models, or    */
	/*  database, regardless of API calls.                                      */
	/*  Useful if API calls are automated from the pod, so when pod is not in   */
	/*  competition, the web app may be 'turned off' so as not to collect       */
	/*  meaningless information.                                                */
	function systemOff (req, res) {
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
	function systemOn (req, res) {
		// Here we will have calls to public controller functions to switch on/off a boolean
		// within each controller that lets it know whether it has permission to run
	}

};


module.exports = SupervisorController;
