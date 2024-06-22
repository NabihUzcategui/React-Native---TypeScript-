
export const BasicTypes = () => {

  const name: string = 'John';
  const age: number = 30;
  const isActive: boolean = true;
  const array: number[] = [ 1, 2, 3 ];
  array.push( 4 );
  const powers: string[] = [ 'fly', 'run', 'teleport' ];
  powers.push( 'telekinesis' );


  return (
    <>

      <h3>Basic Types</h3>
      { name } { age } { isActive ? 'Active' : 'Inactive' } { array.join( ', ' ) }
      <br />
      { powers.join( ', ' ) }


    </>
  );
};
