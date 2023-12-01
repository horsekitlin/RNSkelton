import server from './';


export const signinResult = async (payload) => {
  const { data: response } = await server.post("/auth", payload);
  return response;
};

export const signupResult = async (payload) => {
  const { data: response } = await server.post("/auth/users", payload);
  return response;
};
