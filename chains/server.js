//
//	This chain contains every step needed to create a configuration file for
//	when you want to route traffic to a web server.
//
module.exports = function(container) {

	return new Promise(function(resolve, reject) {

		//
		//	Start the chain
		//
		create_server_confg(container)
			.then(function(container) {

				//
				//	->	Exit the chain
				//
				return resolve(container);

			}).catch(function(error) {

				//
				//	->	Boubble up the error
				//
				return reject(error);

			});

	});

}

//	 _____    _____     ____    __  __   _____    _____   ______    _____
//	|  __ \  |  __ \   / __ \  |  \/  | |_   _|  / ____| |  ____|  / ____|
//	| |__) | | |__) | | |  | | | \  / |   | |   | (___   | |__    | (___
//	|  ___/  |  _  /  | |  | | | |\/| |   | |    \___ \  |  __|    \___ \
//	| |      | | \ \  | |__| | | |  | |  _| |_   ____) | | |____   ____) |
//	|_|      |_|  \_\  \____/  |_|  |_| |_____| |_____/  |______| |_____/
//

function create_server_confg(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Create an empty array where the content of the file will be
		//		stored
		//
		let file = [];

		//
		//	2.	Add data to the array, which in the end will be used to create
		//		the .service file
		//
		file.push("server {");
		file.push("\tlisten 80;");
		file.push("\tlisten [::]:80;");
		file.push("");
		file.push("\tserver_name " + container.url + ";");
		file.push("");
		file.push("\tlocation / {");
		file.push("\t\tproxy_pass http://localhost:" + container.port + ";");
		file.push("\t\tproxy_set_header  X-Real-IP  $remote_addr;");
		file.push("\t\tproxy_set_header Host $host;");
		file.push("\t}");
		file.push("}");

		//
		//	3.	Join each element of the array in to one big file where each
		//		element is in its own line
		//
		let config_file = file.join("\n");

		//
		//	4.	Save the file in to memory
		//
		container.config_file = config_file;

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}