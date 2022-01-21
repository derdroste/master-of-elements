import { a as api } from "../../../chunks/_api-58eb62b5.js";
const get = async (event) => {
  const response = await api(event, `todos/${event.locals.userid}`);
  if (response.status === 404) {
    return { body: [] };
  }
  return response;
};
const post = async (event) => {
  const data = await event.request.formData();
  const response = await api(event, `todos/${event.locals.userid}`, {
    text: data.get("text")
  });
  return response;
};
export { get, post };
