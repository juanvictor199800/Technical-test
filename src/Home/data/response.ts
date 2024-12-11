
import { useFetch } from "../../hooks/useFetch";

type ApiResponse<T> = T[];
type DataType = { 
  id: number;
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: string;
  wizard: string;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
}


const responseAPI =  (url: string) => {
  const { data, loading, error } = useFetch<ApiResponse<DataType>>(url);

  return { data, loading, error };
}

export default responseAPI;