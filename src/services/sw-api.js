const baseUrl = 'https://swapi.dev/api/'


export async function GetAllStarships() {
  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
}