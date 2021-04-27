const getData = api => {
  return fetch(api)
    .then(Response => Response.json())
    .then(Response => response)
    .catch(error => error);
};

export default getData;
