import useSuperHeroesData from "../hooks/useSuperHeroesData";
import { useState } from "react";

function NewComp() {
  const [onMountEnabled, setOnMountEnabled] = useState(false);

  const onSuccess = () => {
    console.log("new comp data fetch successfull");
  };
  const onError = () => {
    console.log("new comp data fetch failed");
  };
  const { data, refetch } = useSuperHeroesData({
    onSuccess: onSuccess,
    onError: onError,
    onMountEnabled: onMountEnabled,
  });

  return (
    <div>
      <h2>New Component</h2>
      <button onClick={refetch}>Refetch</button>
      {data?.data.map((superhero) => (
        <div key={superhero.name}>{superhero.name}</div>
      ))}
    </div>
  );
}

export default NewComp;
