# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

First a DNS request is made to convert the domain to an IP if it isn't already in the host file. Once the conversion is made the browser will communicate with the Techtonics server to retrieve the data to render the page. Once the data is returned, the browser will load the page and display it to the user. 

## From start to finish how does that data reach you to be rendered in the browser?

The data received from the server is sent over small packets and reassembled by the NIC which in turn is sent to the browser. The browser will first load the HTML document that is considered the root (index) and any linked documents in the file. This includes CSS and JS code. 

## What code is rendered in the browser?

HTML, CSS and JS along with any images.

## What is the server-side code’s main function?

The server-side is code is designed to deliver the appropriate page including and custom configurations that could be set using cookies or locale among other relevent data.

## What is the client-side code’s main function?

The client side code is there to run without sending a request back to the server. HTML and CSS should render once but JS may be run on load and remain in the client-side til a certain condition is met. This avoids a constant communication with the server hogging bandwidth.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance is created at a time.

## How many instances of the server-side code are available at any given time?

It's usually one instance but more can be created as necessary. 

## What is runtime?

The runtime is the act of running code as it is compiled.

## How many instances of the the databases connected to the server application are created?

Only one instance is required.
