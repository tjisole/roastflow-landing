export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { fields, table } = req.body;
  const BASE_ID = 'appIskTBssIfOOGMd';
  const TOKEN = process.env.AIRTABLE_TOKEN;

  try {
    const r = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(table)}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields })
    });
    const data = await r.json();
    if (!r.ok) return res.status(400).json(data);
    return res.status(200).json({ ok: true });
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
