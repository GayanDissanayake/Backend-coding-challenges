import { useRef, useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function ChallengeTwo() {
  var array = Array();
  const [occuranceArray, setOccuranceArray] = useState<any[]>();
  const inputRef = useRef<any>(null);

  function handleClick() {
    inputRef.current !== null && array.push(parseInt(inputRef.current.value));
    inputRef.current.value = "";
  }

  function calculateOccurance() {
    const filtered = array.filter((v, i) => array.indexOf(v) !== i);
    const unique = new Set(filtered);
    const occuranceSet = Array.from(unique);
    setOccuranceArray(occuranceSet);
    array = [];
  }

  return (
    <Box component={"div"}>
      <Grid item xs={12} sm={12}>
        <input type="text" ref={inputRef} />
        <Button
          variant="contained"
          id="button1"
          value="Add"
          onClick={handleClick}
          sx={{ height: "30px", ml: 3 }}
        >
          ADD Number
        </Button>
      </Grid>{" "}
      <Grid>
        <Button variant="contained" onClick={calculateOccurance} sx={{ mt: 3 }}>
          Calculate
        </Button>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Numbers that Occured more than once : {occuranceArray?.join(", ")}
        </Typography>
      </Grid>
    </Box>
  );
}
