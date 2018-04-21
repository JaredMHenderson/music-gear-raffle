const authUtilities = require('../../gear-raffle/src/firebase/auth');

module.exports = (app, fb) => {


  app.post('/api/auth/signup', (req, res) => {
    console.log(authUtilities);
    authUtilities.doCreateUserWithEmailAndPassword(req.body.email, req.body.password, fb).then((data) => {
      console.log(data);
      res.json(data);
    });
  });

  app.post('/api/auth/signIn', (req, res) => {
    console.log(authUtilities);
    authUtilities.doSignInWithEmailAndPassword(req.body.email, req.body.password, fb).then((data) => {
      console.log(data);
      res.json(data);
    });
  });

  app.get('/api/auth/signOut', (req, res) => {
    console.log(authUtilities);
    authUtilities.doSignOut(fb).then((data) => {
      console.log(data);
      res.json(data);
    });
  });

  app.post('/api/auth/passwordReset', (req, res) => {
    console.log(authUtilities);
    authUtilities.doPasswordReset(req.body.email, fb).then((data) => {
      console.log(data);
      res.json(data);
    });
  });

  app.post('/api/auth/passwordChange', (req, res) => {
    console.log(authUtilities);
    authUtilities.doPasswordUpdate(req.body.password, fb).then((data) => {
      console.log(data);
      res.json(data);
    });
  });


}
