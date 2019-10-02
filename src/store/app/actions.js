import ExampleService from 'services/example';

const exampleService = new ExampleService();

export const fetchUser = async ({ commit }, tokens) => {
  const { data, error } = await exampleService.getUserProfile(tokens);

  if (!error) {
    commit('setUserProfile', data);
  }
};

export const initUser = async ({ dispatch, commit }, tokens) => {
  commit('setUserTokens', tokens);
  commit('setUserLogged', true);
  await dispatch('fetchUser', tokens);
};

export const resetUser = ({ commit }) => {
  commit('setUserTokens', null);
  commit('setUserProfile', null);
  commit('setUserLogged', false);
};
