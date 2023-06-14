import { useState } from "react";
import { IconButton, Modal } from "@mui/material";
import MapSVG from "./components/MapSVG";
import BuildingCard, { BuildingName } from "./components/BuildingCard";
import { NavLink } from "react-router-dom";
import leftArrowIcon from "../images/icons/leftArrowIcon.svg";

export const Map = () => {
  const [open, setOpen] = useState(false);
  const [buidingName, setBuidingName] = useState<BuildingName>("TeleginHouse");

  return (
    <>
      <div style={{ margin: "1rem", position: "absolute" }}>
        <IconButton aria-label="delete">
          <NavLink to={"/"}>
            <img width={50} src={leftArrowIcon} alt="leftArrowIcon.svg" />
          </NavLink>
        </IconButton>
      </div>
      <div
        style={{
          backgroundColor: "rgb(148, 141, 143)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <BuildingCard name={buidingName} />
        </Modal>
        <MapSVG
          handleOpen={() => setOpen(true)}
          setBuildingName={(name) => {
            setBuidingName(name);
          }}
        />
      </div>
    </>
  );
};

export default Map;
