export const type = "fintResults"

const findResults = text => {
  return {
    type,
    payload: text,
  }
 }

 export default findResults;