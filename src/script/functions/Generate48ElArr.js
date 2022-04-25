export function generate48ElArr() {
  let arrOfId = [...Array(8)].map((el, id) => (el = id));
  let arr48El = [...Array(6)].flatMap((el) => arrOfId);
}
