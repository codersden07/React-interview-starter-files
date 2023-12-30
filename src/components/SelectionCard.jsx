import { Paper, Typography, Box, Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";

const SelectionCard = ({ country, city, onClick }) => {
  SelectionCard.propTypes = {
    country: PropTypes.string,
    city: PropTypes.string,
    onClick: PropTypes.func,
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 400,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CheckBoxIcon fontSize="large" sx={{ color: "green" }} />
        <Typography variant="h4">You Selected</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          {country}
        </Typography>
        <FavoriteIcon sx={{ color: "red" }} />
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          {city}
        </Typography>
      </Box>
      <Button variant="contained" onClick={onClick}>
        Go Back
      </Button>
    </Paper>
  );
};

export default SelectionCard;
