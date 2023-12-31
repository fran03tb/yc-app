//const url = "http://localhost:8080/api/v1/user";
const url: string = "https://your-confort-backend.onrender.com/api/v1/user";

export const createUser = async (data: object) => {
  console.log("from createUser", data);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    if (response.status === 201) return responseJson;
    if (response.status === 409) {
      console.log(responseJson.data_user[0]);
      return responseJson;
    }
  } catch (error: any) {
    console.error("by server", error);
  }
};
