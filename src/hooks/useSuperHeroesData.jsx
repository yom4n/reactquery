import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const useSuperHeroesData = ({
  onSuccess: onSuccess,
  onError: onError,
  refetchIntervalTime: refetchIntervalTime,
  onMountEnabled: onMountEnabled,
}) => {
  return useQuery({queryKey: ["super-heroes"], queryFn: fetchSuperHeroes, 
    refetchInterval: refetchIntervalTime,
    enabled: onMountEnabled,
    onSuccess,
    onError,
    gcTime: 0,
    staleTime: 0
  });
};

export default useSuperHeroesData;
