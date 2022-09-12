import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import axios from "axios";

export default function ChallengeOne() {
  const [selectedFile, setSelectedFile] = useState<string>();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    {
      selectedFile && formData.append("file", selectedFile);
    }

    axios
      .post("http://127.0.0.1:8000/api/upload-csv", formData)
      .then((response) => {
        alert(response.data);
      })

      .catch((err) => {
        if (err.toJSON().message === "Network Error") {
          alert(`Sorry, Couldn't connect with the Server.`);
          // console.log('Please check your internet connection.');
        } else {
          console.log(err);
        }
      });
  };
  return (
    <FormControl>
      <Box sx={{ width: "400px" }}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            sx={{
              pt: "20px",
              fontWeight: "bold",
            }}
          >
            Upload Employee Data
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="csvFile"
            type="file"
            onChange={changeHandler}
            inputProps={{ accept: ".csv" }}
            sx={{ pt: 1, pb: 2 }}
          />
        </Grid>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={selectedFile === undefined}
        >
          Submit
        </Button>
      </Box>
    </FormControl>
  );
}
