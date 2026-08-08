import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const url = `https://pixabay.com/api/?key=56971825-b210e245e3edfc0e9c312393e&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;

  const response = await axios.get(url);
  return response.data;
}
