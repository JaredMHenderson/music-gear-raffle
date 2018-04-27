const authUtilities = require('./auth');

module.exports = (app, fb) => {


  app.post('/api/auth/signup', (req, res) => {
    console.log(authUtilities);
    authUtilities.doCreateUserWithEmailAndPassword(req.body.email, req.body.password, fb).then((data) => {
      console.log(data);
      res.json(data);
    }).catch((error) => {
      res.status(401).json({ error });
    });

  });

  app.post('/api/auth/signIn', (req, res) => {
    console.log(authUtilities);
    authUtilities.doSignInWithEmailAndPassword(req.body.email, req.body.password, fb).then((data) => {
      console.log(data);
      res.json(data);
    })
      .catch((error) => {
        res.status(401).json({ error });
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
