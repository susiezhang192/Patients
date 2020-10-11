#install choco	
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

#install mongodb
choco install mongodb --version=4.4.1 -y --force

#install node.js
choco install nodejs --version=12.19.0 -y --force

#download code from git
git clone https://github.com/susiezhang192/Patients.git

#run npm install
cd Patients
npm install
node server.js
