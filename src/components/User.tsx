import axios from 'axios';

async function getUser() {
  const response = await axios.post(
    'http://localhost:9090/posts',
    {
      title: '제목',
      content: '내용',
      images: [],
      certificate: {
        id: 1,
        title: '자격증',
      },
    },
    {
      headers: { Authorization: 'accessToken' },
    },
  );

  return response.data;
}

const UserPage = async () => {
  const data = await getUser();
  return <div>{data.title}</div>;
};

export default UserPage;
