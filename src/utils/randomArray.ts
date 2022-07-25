const randomArray = (arrLength: number) => {
  const newArr: number[] | undefined = [];
  while (newArr.length !== arrLength) {
    const temp = Math.floor(Math.random() * (arrLength * 5));
    if (!newArr.includes(temp)) {
      newArr.push(temp);
    }
  }
  return newArr;
};

export default randomArray;
