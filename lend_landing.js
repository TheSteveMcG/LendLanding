if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to lend_landing.";
  };

  Template.hello.customers = function () {
    return Customers.find().fetch();
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        alert("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
