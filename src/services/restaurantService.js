import { SWIGGY_API_URL } from "../utils/api";

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(SWIGGY_API_URL);
    const data = await response.json();
    return (
      data?.data|| []
    );
  } catch (error) {
    console.error("error fetching restaurants", error);
    return [];
  }
};

