import { IColumn } from "../types/interfaces";

export const parseJWT = (token: string) => {
  var base64Url = token.split('.')[1];
  var base64 = decodeURIComponent(
    atob(base64Url)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(base64);
};

export const swapArray = (
  inputArr: IColumn[],
  oldPlace: number,
  newPlace: number
)=> {
  const arr = inputArr.slice();
  const item = arr.splice(oldPlace - 1, 1);
  arr.splice(newPlace > 0 ? newPlace - 1 : 0, 0, item[0]);
  return arr.map((el, i) => {
    return { ...el, order: i + 1 };
  });
};
