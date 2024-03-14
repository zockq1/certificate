async function getUser() {
  const response = await fetch('http://localhost:9090/user');
  const json = await response.json();

  return json;
}

const UserPage = async () => {
  const user = await getUser();
  console.log('user', user);
  return <div>{user.data.name}</div>;
};

export default UserPage;
