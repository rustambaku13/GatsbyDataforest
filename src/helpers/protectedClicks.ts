export const AuthProtectedClick = (callback) => {
  // If auth then do something else callback

  return () => {
    callback();
  };
};
