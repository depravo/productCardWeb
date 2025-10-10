import ArtItem from "@/types/ArtItem";
import axios, { AxiosError } from "axios";

export const getArts = async () => {
  try {
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?q=departmentId=4&hasImages=true&limit=10"
    );
    console.log(response.status);
    const artsJSON = await response.json();
    return artsJSON;
  } catch (error) {
    const err = error as AxiosError;
    console.log("Error message:", err.message);
  }
};

export const getArtInfo = async (artId: number) => {
  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    );
    const artInfoJSON = await response.json();
    return artInfoJSON;
  } catch (error) {
    const err = error as AxiosError;
    console.log("Error message:", err.message);
  }
};

export const loadArts = async () => {
  try {
    const artsData = await getArts();
    if (!artsData || !artsData.objectIDs) return [];

    const artIds = artsData.objectIDs.slice(0, 10);

    const artPromises = artIds.map((id: number) => getArtInfo(id));
    const artsDataArray = await Promise.all(artPromises);

    const artsArr: ArtItem[] = artsDataArray
      .filter((data) => data && data.primaryImage)
      .map(
        (data) =>
          new ArtItem(
            data.primaryImageSmall,
            data.objectName,
            data.title,
            data.department,
            data.objectDate
          )
      );
    console.log(artsArr);
    return artsArr;
  } catch (error) {
    console.log(error);
    return [];
  }
};
