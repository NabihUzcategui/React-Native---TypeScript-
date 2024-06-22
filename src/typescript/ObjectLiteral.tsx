interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiteral = () => {
  const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    address: {
      country: "Buenos Aires",
      houseNo: 120,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
