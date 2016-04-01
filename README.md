# Kisura frontend test
Please clone this repo and follow the instructions below. If you have any questions please do not hesitate to contact us and let us know.

## What do we expect from you?
Create a small appointment application that lists appointments and allows the user to create an appointment for any given customer. The data does _not_ have to be persistant. We don't expect the test to be a visual work of art, but we do expect it to be clean and well laid out. If you can think of anyway to improve this application then you are very welcome to improve upon its functionality.

There should be two sections to the application:

1. The appointment list, which lists all the available appointments
2. A form allowing the user to create an appointment for a customer, which is then added to the list

#### The Appointment List
The appointment list should simply be a list of all appointments sorted by date and time.  The ability to edit or delete an appointment isn't required.

#### The Appointment Creation form
The appointment creation form should allow you to create an appointment with at least the following bits of information:

* Customer forename and surname
* Appointment date and time
* A note about the appointment

## What should I use?
The test should be an SPA so the technologies you use are entirely up to you, but we recommend that you use something like the following:

* [Angular](https://angularjs.org/)/[Backbone](http://backbonejs.org/) &c. for models and controllers
* [ReactJS](https://facebook.github.io/react/) for the view
* [Flux](https://facebook.github.io/flux/)/[Redux](https://github.com/reactjs/redux)
* [Less](http://lesscss.org/)/[Sass](http://sass-lang.com/)
* and, if you want, anything else that you normally use

## What should I do?
Simply clone this repo and build your environment. We have installed [gulp](http://gulpjs.com/), [Sass](http://sass-lang.com/) and [jasmine](http://jasmine.github.io/) by defalut, but if you want to change this in any way then please go ahead. There is a default gulp installation that has been kept to a minimum. If you wish to use yeoman or something similar to build your environment and clear this, then we leave that up to you to do.

## What to do when I'm finished?
Push your test to your own private repo or send an email to martin.jewell@kisura.de with a link to your repo and any comments you would like to make about your test.