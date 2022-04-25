export const ENDPOINT_URL = "https://6266502adbee37aff9af26fd.mockapi.io/todo";

export const getTodos = async () => {
  const res = await fetch(ENDPOINT_URL);
  return await res.json();
};
