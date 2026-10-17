export default async function handler(req, res) {
  const fileId = '162H7W8ouCQBjCgB31w1nAoShJ5vVrg9Y';
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  try {
    const response = await fetch(url);
    let html = await response.text();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  } catch (e) {
    res.status(500).send('Error: ' + e.message);
  }
}
