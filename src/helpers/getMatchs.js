import Papa from 'papaparse';

async function getMatchs() {
  const res = await fetch(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTEaG9aZr762tMh-pjGc8BbaRwdXg29vT_6bdIZPdybHvKU16ByDLzYB0topAXOLXsGaoIVzH6Aor14/pub?output=csv'
  );
  const data = await res.text();
  const parsed = await new Promise((resolve, reject) => {
    Papa.parse(data, { header: true, complete: resolve, error: reject });
  });
  return parsed.data;
}

export default getMatchs;
