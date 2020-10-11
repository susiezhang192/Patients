1. Deployment on Windows
 
 (1) install MongoDb
     
	 a. Download installer at https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
	 
	 
	 b. Run the MongoDB installer
	 msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-windows-x86_64-4.4.1-signed.msi
	 
	 c. Start mongoDb
	 
	 open a Command prompt with Administrative privileges and run:
	 "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
	 
(2) install Node.js

    a. Download nodejs at https://nodejs.org/en/download/
	
	b. Run nodejs installer
	
(3) copy the Patients folder to where you want the code to be

(4) open a Command prompt with Administrative privileges, got to the Patients folder.
    cd \path\to\Patients
	
(5) From the Patientss directory, Run npm install to install the dependent packages.
    npm install
	
(6) From the Patientss directory, run this command to start the web application.
    node server.js
	
(7) From a separate browser tab, navigate to your VM's public IP address.
    You should see the forms for add new patients, as in the attached screenshot.
	
*install choco	
  *Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

*install mongodb
  *choco install mongodb --version=4.4.1 -y --force

*install node.js
  *choco install nodejs --version=12.19.0 -y --force
