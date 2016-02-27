vhosttests
==========

A simple testing ground experimenting with running multiple node applications on one VPS with domains routing
to various ports.

To mimic my test, you need to modify your /etc/hosts file to have the following entries:

127.0.0.1       domain1.localhost

127.0.0.1       domain2.localhost

127.0.0.1       domain3.localhost

This will mimic different urls on your local machine (Mac OS X at least)


After you have your hosts file modified, launch each app individually in a seperate terminal window:
proxy (the app that handles routing)

app1, app2, app3 all just serve up flag content


Once all apps are running, you can point your browser to domain1.localhost:1337 and you will see the app1 page,
which is the same application as localhost:3001