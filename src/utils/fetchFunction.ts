export const fetchFuntion = async (
  reqMethod: string,
  url: string,
  reqBody: {}
) => {
  const response = await fetch(url, {
    method: reqMethod,
    body: JSON.stringify(reqBody),
    headers: {
      "Content-Type": "Application/json",
    },
  });
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  return data;
};
