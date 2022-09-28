const uploadImage = (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  return fetch(
    `https://api.imgbb.com/1/upload?key=${
      process.env.NEXT_PUBLIC_IMGBB_API_KEY
    }&expiration=${60 * 60 * 24}`,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((resp) => resp.json())
    .catch((error) => {
      console.log({ error });
    });
};

export default uploadImage;
