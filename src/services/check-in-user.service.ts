export async function checkInUser(id: string) {
  const reqOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(
    `https://gatekeeper-service-3nobs5nigq-no.a.run.app/api/users/${id}/check-in`,
    reqOptions
  );
}
