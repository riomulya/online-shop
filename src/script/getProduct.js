export default async function getAllProduct() {
  const response = await fetch('http://localhost:8080/');
  const responseData = await response.json();
  if (!response.ok) {
    const error = new Error('failed to fetch product');
    throw error;
  }
  //   const message = responseData[message];
  //   console.log(response, responseData);
  const message = responseData.message;
  return message;
}
