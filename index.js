#!/usr/bin/env node

let fs = require('fs');
let os = require('os');
let npm = require('./package.json');
let term = require('terminal-kit').terminal;
let exec = require('child_process').exec;
let program = require('commander');

//   _____   ______   _______   _______   _____   _   _    _____    _____
//  / ____| |  ____| |__   __| |__   __| |_   _| | \ | |  / ____|  / ____|
// | (___   | |__       | |       | |      | |   |  \| | | |  __  | (___
//  \___ \  |  __|      | |       | |      | |   | . ` | | | |_ |  \___ \
//  ____) | | |____     | |       | |     _| |_  | |\  | | |__| |  ____) |
// |_____/  |______|    |_|       |_|    |_____| |_| \_|  \_____| |_____/
//

//
//	The CLI options for this app.
//
program
	.version(npm.version)
	.parse(process.argv);

//
//	React when the user needs help
//
program.on('--help', function() {

	//
	//	Just add an empty line at the end of the help to make the text more
	//	clear to the user
	//
	console.log("");

});

//
//	Pass the user input to the commander module
//
program.parse(process.argv);

//	 __  __              _____   _   _
//	|  \/  |     /\     |_   _| | \ | |
//	| \  / |    /  \      | |   |  \| |
//	| |\/| |   / /\ \     | |   | . ` |
//	| |  | |  / ____ \   _| |_  | |\  |
//	|_|  |_| /_/    \_\ |_____| |_| \_|
//

//
//	1.	Crate an empty container where the data will be passed in each chain
//		reaction
//
let container = {}

//
//	2.	Make sure we are root
//
check_if_we_are_root(container)
	.then(function(container){

		//
		//	1.	Make sure Nginx is present
		//
		return check_if_nginx_is_present(container);

	}).then(function(container){

		//
		//	1.	Ask for the URL
		//
		return ask_for_url(container);

	}).then(function(container){

		//
		//	1.	Ask for the PORT
		//
		return ask_for_the_port(container);

	}).then(function(container){

		//
		//	1.	Generate the file
		//
		return create_the_file(container);

	}).then(function(container){

		//
		//	1.	Save the file
		//
		return save_the_file(container);

	}).then(function(container){

		//
		//	1.	Restart Nginx
		//
		return restart_nginx(container);

	}).then(function(container){

		//
		//	1.	Let the user know all went well
		//
		term("\n");
		term("\n");
		term.green("\tNginx restarted");
		term("\n");
		term("\n");

		//
		//	->	Exit the app
		//
		process.exit(0);

	}).catch(function(error){

		//
		//	1.	Show the error message
		//
		term.red("\n");
		term.red("\t" + error.message);
		term.red("\n");
		term.red("\n");

		//
		//	-> Exit the app
		//
		process.exit(0);

	});

//	 _____    _____     ____    __  __   _____    _____   ______    _____
//	|  __ \  |  __ \   / __ \  |  \/  | |_   _|  / ____| |  ____|  / ____|
//	| |__) | | |__) | | |  | | | \  / |   | |   | (___   | |__    | (___
//	|  ___/  |  _  /  | |  | | | |\/| |   | |    \___ \  |  __|    \___ \
//	| |      | | \ \  | |__| | | |  | |  _| |_   ____) | | |____   ____) |
//	|_|      |_|  \_\  \____/  |_|  |_| |_____| |_____/  |______| |_____/
//

//
//	Before we do anything we need to make sure this app is running as root.
//
//	We need root to be able to:
//
//	- save the file in to the Nginx directory
//	- Restart Nginx
//
function check_if_we_are_root(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Check if the SystemD directory exists
		//
		let username = os.userInfo().username;

		//
		//	2.	Warn the user that the directory is not present
		//
		if(username != "root")
		{
			return reject(new Error("Run the command as root"));
		}

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}

//
//	Make sure the Nginx folder exists and is preset so we can save our
//	config file
//
function check_if_nginx_is_present(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Check if the SystemD directory exists
		//
		let is_systemd = fs.existsSync("/etc/nginx/sites-enabled");

		//
		//	2.	Warn the user that the directory is not present
		//
		if(!is_systemd)
		{
			return reject(new Error("NGINX Error"));
		}

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}

//
//	Ask the user for the URL of the site.
//
function ask_for_url(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Ask input from the user
		//
		term.yellow("Please enter the site URL: ");

		//
		//	2.	Process the user input
		//
		term.inputField({}, function(error, url) {

			//
			//	1.	Save the URL
			//
			container.url = url;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Ask for the port at which the site will be running
//
function ask_for_the_port(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Ask input from the user
		//
		term.yellow("\nPlease enter the site PORT: ");

		//
		//	2.	Process the user input
		//
		term.inputField({}, function(error, port) {

			//
			//	1.	Save the PORT
			//
			container.port = port;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	After we have all the data we can create the config file for the site.
//
function create_the_file(container)
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

//
//	Save the config file in the right place
//
function save_the_file(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Create the path the file will be stored in
		//
		let file = "/etc/nginx/sites-enabled/" + container.url

		//
		//	2.	Save the data in to the .env file.
		//
		fs.writeFile(file, container.config_file, (error) => {

			//
			//	1.	Make sure we show any error
			//
			if(error)
			{
				return reject(error);
			}

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Restart Nginx so we can start using our site.
//
function restart_nginx(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Execute the command that will restart Nginx server
		//
		exec('systemctl restart nginx', function(error, stdout, stderr) {

			//
			//	1.	Make sure we show any error
			//
			if(error)
			{
				return reject(new Error(error))
			}

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}