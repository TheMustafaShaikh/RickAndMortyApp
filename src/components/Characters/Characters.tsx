import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../queries";
import CustomCard from "../Card/Card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import {IData,IVariables,IResults} from "./Characters.types"

function Characters() {
  const [page, setPage] = React.useState<number>(1);
  const { loading, error, data }= useQuery<IData,IVariables>(GET_CHARACTERS,{variables:{
    page:page
  }});
  if (data) {
    const { characters} = data;
    const totalPages = characters.info.pages;
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
    return (
      <div className="App">
        <Grid container spacing={2}>
          {characters.results.map((element: IResults) => (
            <Grid item xs={4} key={element.id}>
              <CustomCard
                imgURL={element.image}
                name={element.name}
                gender={element.gender}
              />
            </Grid>
          ))}
        </Grid>
        <div className="align-center-pagination">
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </div>
        
      </div>
    );
  } else if(loading){
    return <div>Loading..</div>;
  }else{
    return <div>{error?.message}</div>
  }
}

export default Characters;
