import "./App.css";
import { IconButton, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import mapIcon from "./images/icons/mapIcon.svg";
import logoIcon from "./images/icons/logoIcon.png";
import building from "./images/general/building.png";

function App() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/Historical-Buildings/map");
  };

  return (
    <div className="App">
      <div
        style={{
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
            <NavLink to={"/Historical-Buildings/map"}>
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
    </div>
  );
}

export default App;
