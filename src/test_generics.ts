//Estudo de generics
type FilterCallBack<U> = (item: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callback: FilterCallBack<T>): T[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFilter = myFilter(array, (item) => item % 2 === 0);

console.log(arrayFilter);
