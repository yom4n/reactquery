import { useState } from "react";
import useSuperHeroesData from "../hooks/useSuperHeroesData";




export function RQSuperHeroesPage() {
  const [refetchIntervalTime, setRefetchIntervalTime] = useState(3000)

  const onSuccess = (data) => {
    if (data?.data.length == 4){
      setRefetchIntervalTime(false)
    }
    console.log('fetched')
  }

  const onError = () => {
    setRefetchIntervalTime(false)
  }

  const { isLoading, data, isError, error } = useSuperHeroesData(onSuccess, onError, refetchIntervalTime)

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
}
