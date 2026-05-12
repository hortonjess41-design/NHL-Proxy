export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { path, ...params } = req.query;
  const query = new URLSearchParams(params).toString();
  const url = `https://api.the-odds-api.com/v4/${path}?${query}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(response.status).json(data);
}
