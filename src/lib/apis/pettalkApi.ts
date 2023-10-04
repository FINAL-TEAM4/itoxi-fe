import axios from "axios";
import { API_URL } from "./base";

export const allList = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/pet-talk/{mainCategory}?pet=DOG&order=LATEST&page=0&size=15`
    );
    console.log("모든 리스트", response.data);
    return response.data;
  } catch (error) {
    console.error("no List:", error);
  }
};

interface WritingOutParams {
  accessToken: string;
  image?: File;
  request: object;
}

export const writingOut = async ({
  accessToken,
  image,
  request,
}: WritingOutParams) => {
  try {
    const formData = new FormData();

    if (image) {
      formData.append("image", image);
    }

    formData.append("request", JSON.stringify(request));

    //여기
    const response = await axios.post("/pet-talk", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("성공", response.data);
    return response.data;
  } catch (error) {
    console.error("실패", error);
    throw error;
  }
};
