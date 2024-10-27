type PropType = {
  names: { name: string }[];
  username: string;
};

export default function ServerData(props: PropType) {
  console.log(props);

  return (
    <>
      <h1>Hello Products</h1>
      <ul>
        {props.names.map((user, index) => (
          <li key={index}>Username: {user.name}</li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  const names = [{ name: "Farooq" }, { name: "Ahmed" }, { name: "Faizan" }];
  return {
    props: {
      names,
    },
  };
};
