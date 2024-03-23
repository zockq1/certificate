import axios from 'axios';

async function getUser() {
  const response = await axios.get(
    'http://localhost:9090/certificate/category',
  );

  return response.data;
}

const UserPage = async () => {
  const data = await getUser();
  console.log(data);
  return <div>{data[0].title}</div>;
};

export default UserPage;
