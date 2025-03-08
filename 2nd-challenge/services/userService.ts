import { Users } from "../types/user";

const API = "https://dummyjson.com/users";

export default async function fetchUserData(): Promise<{ users: Users }> {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
