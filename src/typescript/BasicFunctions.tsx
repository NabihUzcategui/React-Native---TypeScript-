export const BasicFunctions = () => {
  const sumTowNumbers = (a: number, b: number) => {
    return a + b;
  };
  return (
    <>
      <h3>Basic Functions</h3>
      <span>El resultado de sumar : {sumTowNumbers(5, 4)}</span>
    </>
  );
};
