import UserPool from "./UserPool";

const isAuthenticated = () => {
  const user = UserPool.getCurrentUser();

  console.log("Current user: ", user);

  if (!user) {
    // No user is currently signed in
    return Promise.resolve(false);
  }

  return new Promise((resolve, reject) => {
    user.getSession((error, session) => {
      if (error || !session.isValid()) {
        // Session is not valid
        resolve(false);
      } else {
        // Session is valid
        console.log("session: ", session);

        resolve(true);
      }
    });
  });
};

export default isAuthenticated;
