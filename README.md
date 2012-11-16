arduino_car_sample_client
=========================

A sample HTML+JavaScript client to interact with the websocket server

The API is simple: connect to a web socket and send a JSON string in the following format:  
{direction: ['left'], speed: 0..3}  
{direction: ['right'], speed: 0..3}  
{direction: ['forward'], speed: 0..3}  
{direction: ['reverse'], speed: 0..3}  
{direction: ['forward', 'left']}  
{direction: ['forward', 'right']}  
{direction: ['reverse', 'left']}  
{direction: ['reverse', 'right']}  

You can use the example as reference :)
