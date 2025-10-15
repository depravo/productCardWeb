import ArtItem from "@/types/ArtItem";
import axios, { AxiosError } from "axios";

export const getArts = async () => {
  try {
    const response = await axios.get(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?q=departmentId=4&hasImages=true&limit=10"
    );
    console.log(response.status);
    return response;
  } catch (error) {
    const err = error as AxiosError;
    console.log("Error message:", err.message);
  }
};

export const getArtInfo = async (artId: number) => {
  try {
    const response = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    );
    return response;
  } catch (error) {
    const err = error as AxiosError;
    console.log("Error message:", err.message);
  }
};

export const loadArts = async () => {
  try {
    const artsData = await getArts();
    if (!artsData || !artsData.data.objectIDs) return [];

    const artIds = artsData.data.objectIDs.slice(0, 10);

    const artPromises = artIds.map((id: number) => getArtInfo(id));
    const artsDataArray = await Promise.all(artPromises);

    const artsArr: ArtItem[] = artsDataArray.map(
      (item) =>
        new ArtItem(
          item.data.objectID,
          item.data.primaryImageSmall,
          item.data.objectName,
          item.data.title,
          item.data.department,
          item.data.objectDate
        )
    );
    console.log(artsArr);
    return artsArr;
  } catch (error) {
    console.log(error);
    return [];
  }
};
