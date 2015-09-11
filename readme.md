# Grumblr Angular

Notes:

 - directives: building block of angular, such as a module, form a connection between html and the logic
 - factories: used to maintain one single instance of something, good for maintaining state
 - controllers: used for data connections, cant contain extra templating, usually a logical parent
 - filters: data value remains same but data representation may be different
 - ng model: directive, used as core for two way data binding, serves a portal for input and data
 - ng repeat: accepts two basic types of collections, arrays and objects/ closely resembles a for loop
  - dependency injection: each component is responsible for declaring its own dependencies/doesnt need to know before hand which dependencies it needs
  - http service or api wrapper service: makes ajax calls and handles their responses, utilizes promises to handle responses asynch
  - models: objects that should only ever have one instance within our app
  - service: used to help data persist and make sure the routes are not stateless, this can be stored in services and factories
