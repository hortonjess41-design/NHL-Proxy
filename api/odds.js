export default async function handler(req, res) {
  const { path, ...params } = req.query;
  const query = new URLSearchParams(params).toString();
  const url = `https://api.the-odds-api.com/v4/${path}?${query}`;
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(response.status).json(data);
}
