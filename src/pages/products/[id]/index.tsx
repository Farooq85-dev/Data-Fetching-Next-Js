type PropType = {
  id: string;
};

export default function Prdocuts({ id }: PropType) {
  console.log(id);

  return (
    <>
      <h3>{id}</h3>
      <br />
      <h1>Hello Prdocuts</h1>
    </>
  );
}
