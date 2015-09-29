/**
 * DashboardController
 */
module.exports = {

  /**
   * create - send in a new update with most up-to-date data
   */
  create: function (req, res, next) {
    //Create a dashboard update with parameters that are sent in when there is new data to display
    DashboardUpdate.create(req.body, function dashboardUpdateCreated(err, update) {

      // Print error to console if an error occurred
      if (err) {
        console.log("DashboardUpdate.create failed");
        console.log(err);

        //return response
        return res.serverError();
      }

      console.log("Sucessfully created dashboard update");
      return res.json(201, update);
    });
  },

  /**
   * getData - find the most recent update to the dashboard
   */
  getData: function (req, res, next) {
    DashboardUpdate.find({sort: 'createdAt DESC'}, function updateFound(err, updates) {
      if (err) return next(err);
      if (!updates) return next();

      if (!updates[0] || !updates[1]) {
        return res.notFound();
      }

      console.log("Most recent dashboard data retrieved");
      return res.json(200, updates[0]);
    });
  }
};
