export async function getUsers() {
  const reqOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `https://gatekeeper-service-3nobs5nigq-no.a.run.app/api/users`,
    reqOptions
  );

  const resData = await response.json();

  return resData.data;
}
