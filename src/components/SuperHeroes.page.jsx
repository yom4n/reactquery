import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data);
      console.log(res.data)
      setIsLoading(false);
    }).catch(error => {
      setError(error.message);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>error</h2>
  }

  return <>
    <h2>Super Heroes Page</h2>
    {data.map((hero)=> {
      return <div key={hero.name}>{hero.name}</div>
    })}
  </>;
}
