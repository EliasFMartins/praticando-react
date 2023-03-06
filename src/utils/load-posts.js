export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosRepose = fetch("https://jsonplaceholder.typicode.com/photos");
  const [posts, photos] = await Promise.all([postsResponse, photosRepose]);
  const postsJson = await posts.json();
  const photosJson = await photos.json();
  const postsAndPhotos = postsJson.map((posts, index) => {
    return { ...posts, cover: photosJson[index].url };
  });
  return postsAndPhotos;
}