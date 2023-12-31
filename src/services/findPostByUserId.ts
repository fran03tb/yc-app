// const url: string = "http://localhost:8080/api/v1/post/user/";
const url: string = "https://your-confort-backend.onrender.com/api/v1/user/";


export const findpostByID = async (id: string) => {
  try {
    const response = await fetch(`${url}${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.log(
          "No se encontraron publicaciones para el usuario con ID:",
          id
        );
        return null;
      } else {
        console.log(`Request failed with status: ${response.status}`);
      }
    }

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log("Error fetching API:", error);
    return null;
  }
};
