/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	addData:function (req,res) {
		
		var data_from_client = req.params.all();

		if(req.isSocket && req.method === 'POST'){

			// This is the message from connected client
			// So add new conversation
			Data.create(data_from_client)
				.exec(function(error,data_from_client){
					console.log(data_from_client);
					Data.publishCreate({id: data_from_client.id, val : data_from_client.val});
				}); 
		}
		else if(req.isSocket){
			Data.watch(req.socket);
			console.log( 'User subscribed to ' + req.socket.id );
		}
	}	
};

