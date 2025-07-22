# Smart-Light-Demo
<h2>Write-up can be found <a href="">here</a></h2>


<h1>This is a proof of concept using the insecure protocol HTTP and is 
not recommeded for any kind of production</h1>


<h2>Hardware</h2>
<ul>
  <li>Raspberry Pi 4B</li>
  <li>1000 Ohms Ressistor</li>
  <li>Breadboard</li>
  <li>2 Jumper Wires</li>
</ul>

<h2>Software and Programming Languages</h2>
<ul>
  <li>HTML/CSS/JS (Basic Webpage and interfacing with the API)</li>
  <li>NodeJS (API middleman to allow clients to interface with server)</li>
  <li>Python (Scripts called from the API to control GPIO pins)</li>
  <li>Apache2 (Used to host the webpage)</li>
  <li>cron (Used to call a bash script to start the API on boot)</li>
  <li>systemctl (used to start Apache2 on boot)</li>
</ul>
