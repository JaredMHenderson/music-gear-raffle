module.exports = {
  doCreateUserWithEmailAndPassword: (email, password, fb) =>
    fb.auth().createUserWithEmailAndPassword(email, password),
  doSignInWithEmailAndPassword: (email, password, fb) =>
    fb.auth().signInWithEmailAndPassword(email, password),
  doSignOut: (fb) => {
    console.log(fb.currentUser());
    fb.auth().signOut();
    console.log(fb.currentUser());

  },
  doPasswordReset: (email, fb) =>
    fb.auth().sendPasswordResetEmail(email),
  doPasswordUpdate: (password, fb) =>
    fb.auth().currentUser().doPasswordUpdate(password),
}
// // Sign Up
// export const doCreateUserWithEmailAndPassword = (email, password) =>
//   auth.createUserWithEmailAndPassword(email, password);

// // Sign In
// export const doSignInWithEmailAndPassword = (email, password) =>
//   auth.signInWithEmailAndPassword(email, password);

// // Sign out
// export const doSignOut = () =>
//   auth.signOut();

// // Password Reset
// export const doPasswordReset = (email) =>
//   auth.sendPasswordResetEmail(email);

// // Password Change
// export const doPasswordUpdate = (password) =>
//   auth.currentUser.updatePassword(password);