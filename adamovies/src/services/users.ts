import { idText } from "typescript";
import { mapToArray } from "../helpers/mapTpArray";
import { User } from "../types";
import { apiMovies } from "../components/utils/axios"

const add = async () => {
  const response = await apiMovies.post("/users.json");
  return response.data;
};

const getAll = async (): Promise<User[]> => {
  const response = await apiMovies.get("/users.json");
  return mapToArray(response.data);
};

const getBy = async (type: "email" | "token", value: string) => {
  const users = await getAll();

  const user = users.find((user) => user[type] === value);

  return user;
};

const update = ({ id, ...rest }: Partial<User>) => {
  const response = apiMovies.patch(`/users/${id}.json`, { ...rest });
};

export const servicesUser = { add, getAll, update, getBy };
