var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'TEST-134178833943513-071421-0f561b8a583855d05459847a762e847e-399788174'
});
//fase teste

var preference = {
  items: [
    {
      name: 'Bike1',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 100000
    }
  ]
};

mercadopago.preferences.create(preference)