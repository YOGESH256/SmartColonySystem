const intialPinCode = async (pincode) => {
  console.log(pincode);
  const loo = await Promise.all([
    fetch(
      `http://open.mapquestapi.com/geocoding/v1/address?key=4kNrxkAjBDGNKdvOKlAhbAZfmlG7qOgM&postalCode=${pincode}`
    ),
  ])
    .then(async ([aa]) => {
      const a = await aa.json();
      return a;
    })
    .then((responseText) => {
      return responseText.results[0].locations[0].latLng;
    })
    .catch((err) => {
      console.log(err);
    });

  return loo;
};

export { intialPinCode };
