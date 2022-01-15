export function shuffle(array){
  return array.sort(() => Math.round(Math.random() * 100) - 50);
}
