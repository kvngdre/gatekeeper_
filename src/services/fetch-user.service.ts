export async function fetchUser(code: string) {
  const reqOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    `https://gatekeeper-service-3nobs5nigq-no.a.run.app/api/users/codes/${code}`,
    reqOptions
  );
}
