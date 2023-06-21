import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import mapIcon from "./images/icons/mapIcon.svg";
import logoIcon from "./images/icons/logoIcon.png";
import building from "./images/general/building.png";
import { Box, IconButton } from "@mui/material";

export const App = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/map");
  };

  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${building})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
      }}
      onClick={handleOnClick}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem",
          }}
        >
          <div style={{ alignSelf: "center" }}>
            <img width={50} src={logoIcon} alt="logoIcon.png" />
          </div>
          <IconButton aria-label="delete">
            <NavLink to={"/map"}>
              <img width={50} src={mapIcon} alt="mapIcon.svg" />
            </NavLink>
          </IconButton>
        </div>
        <div>
          <Typography
            style={{ fontWeight: "bold" }}
            align="center"
            fontSize={"3rem"}
            mt={2}
            mb={2}
          >
            Исторические здания города Красноярска
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default App;
