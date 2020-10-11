1. Deployment on Windows VM
 
 (1) Install MongoDb
     
	 a. Download installer at https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
	 	 
	 b. Run the MongoDB installer
	 msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-windows-x86_64-4.4.1-signed.msi
	 
	 c. Start mongoDb 
	 open a Command prompt with Administrative privileges and run:
	 "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
	 
(2) Install Node.js

    a. Download nodejs at https://nodejs.org/en/download/
	
	b. Run nodejs installer
	
(3) Get the code from github
    git clone https://github.com/susiezhang192/Patients

(4) Open a Command prompt with Administrative privileges, got to the Patients folder.
    cd \path\to\Patients
	
(5) From the Patients directory, run npm install to install the dependent packages.
    npm install
	
(6) From the Patients directory, install Patients service app as windows service
    npm install -g qckwinsvc

(7) Open port 80 on VM	

(8) From a separate browser tab, navigate to your VM's public IP address.
    You should see the forms for add new patients, as in the attached screenshot.


2. Deployment on Ubuntu VM
 
(1) First, we'll make sure all current packages are up to date
	 sudo apt update && sudo apt upgrade -y
	
<<<<<<< HEAD
(2) Install the MongoDB package
    a. sudo apt-get install -y mongodb

	b. Check if MongoDB is running
	   sudo systemctl status mongodb

	c. Verify it's installation
		mongod --version

(3) Install Node.js
    a. Register the Node.js repository so the package manager can locate the packages, like this
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

	b. Install the Node.js package
	sudo apt-get install -y nodejs

	c. Run node -v to verify the installation
	node -v

(4) Under the root directory, get code from github
	cd /
    sudo git clone https://github.com/susiezhang192/Patients

(5) From the Patients directory, run npm install to install the dependent packages.
    npm install

(6) Create /etc/systemd/system/patients.service file, and edit it as below:
	[Unit]
	Description="Patients Service App"

	[Service]
	ExecStart=/usr/bin/node server.js
	WorkingDirectory=/Patients
	Restart=always
	RestartSec=10
	StandardOutput=syslog
	StandardError=syslog
	SyslogIdentifier=PatientsService
	Environment=NODE_ENV=production PORT=80

	[Install]
	WantedBy=multi-user.target

(7) Start the patients app service
	sudo systemctl enable patients.service
	sudo systemctl start patients.service

(8) Open port 80 on VM	

(9) From a separate browser tab, navigate to your VM's public IP address.
    You should see the forms for add new patients, as in the attached screenshot.

