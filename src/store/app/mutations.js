export const setUserTokens = (state, tokens) => {
  state.user.tokens = tokens;
};

export const setUserProfile = (state, profile) => {
  state.user.profile = profile;
};

export const setUserLogged = (state, logged) => {
  state.user.logged = logged;
};
