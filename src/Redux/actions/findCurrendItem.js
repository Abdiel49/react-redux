export const type = "fintCurrentItem"

const findCurrentItem = id => {
  return {
    type,
    payload: id,
  }
 }

 export default findCurrentItem;