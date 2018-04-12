https://api.stripe.com

var stripe = require("stripe")(
    "pk_test_bx1jjmYc4w9cTQV1TghATf3e"
  );

//handling errors
  switch (err.type) {
    case 'StripeCardError':
      // A declined card error
      err.message; // => e.g. "Your card's expiration year is invalid."
      break;
    case 'RateLimitError':
      // Too many requests made to the API too quickly
      break;
    case 'StripeInvalidRequestError':
      // Invalid parameters were supplied to Stripe's API
      break;
    case 'StripeAPIError':
      // An error occurred internally with Stripe's API
      break;
    case 'StripeConnectionError':
      // Some kind of error occurred during the HTTPS communication
      break;
    case 'StripeAuthenticationError':
      // You probably used an incorrect API key
      break;
    default:
      // Handle any other types of unexpected errors
      break;
  }

  
  //expanding objects
  var stripe = require("stripe")(
    "sk_test_oWXSBNxeWYCiq7xQTGDVAKtq"
  );
  
  stripe.charges.retrieve("ch_1CFvAEHIe7OE6CgHsppxEjMy", {
    expand: ["customer"]
  });

  //idempotent requests
  var stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
  );
  
  stripe.charges.create({
    amount: 2000,
    currency: "usd",
    source: "tok_visa", // obtained with Stripe.js
    description: "Charge for addison.thompson@example.com"
  }, {
    idempotency_key: "rAD9ppc0rTAtqnsM"
  }, function(err, charge) {
    // asynchronously called
  });


  //metadata example request
  var stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
  );
  
  stripe.charges.create({
    amount: 2000,
    currency: "usd",
    source: "tok_mastercard", // obtained with Stripe.js
    metadata: {'order_id': '6735'}
  });


  //PAGINATION EXAMPLE
  var stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
  );
  
  stripe.customers.list(
    { limit: 3 },
    function(err, customers) {
      // asynchronously called
    }
  );

  //AUTO PAGINATION EXAMPLE
  var stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
  );
  // Support for this directly in Stripe's Node library is forthcoming.

  //VERSIONING
  var stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
  );
  stripe.setApiVersion('2018-02-28');

  //RETRIEVE BALANCE
  var stripe = require("stripe")(
    "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
  );
  
  stripe.balance.retrieve(function(err, balance) {
    // asynchronously called
  });

  


