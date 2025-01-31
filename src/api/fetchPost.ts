import axios from 'axios';
interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPost = async (id: number): Promise<PostResponse> => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Fetch data failed:', error);
    throw error;
  }
};
