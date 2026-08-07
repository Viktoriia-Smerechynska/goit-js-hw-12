import axios from 'axios';

export function getImagesByQuery(query) {
  const url = `https://pixabay.com/api/?key=56971825-b210e245e3edfc0e9c312393e&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios.get(url).then(response => {
    return response.data;
  });
}
