export const dishApi = fetch(process.env.REACT_APP_API_URL!, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify({ a: 1, b: 2 }),
});

// export const postDish = (dish: Dish): Promise<Dish> => {
//   dishApi.then();
// };
