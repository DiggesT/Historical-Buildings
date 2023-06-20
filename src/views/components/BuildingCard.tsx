import { Box } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import * as Cards from "./cards";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "75%",
  overflowY: "scroll",
  // outerHeight: 100,
  // innerHeight: 100,
  bgcolor: "background.paper",
  border: "3px solid #F3C89E",
  boxShadow: 24,
  p: 4,
};

export type BuildingName =
  | "TeleginHouse"
  | "FireBrigadePhoto"
  | "SmirnovTradingHouse"
  | "FrankfurtHouse"
  | "KochanowskaHouse"
  | "TokarevHouse"
  | "PetrovHouse"
  | "StavrovskyHouse"
  | "KudryavtsevHouse"
  | "Church"
  | "CityLibrary"
  | "VolkovHouse"
  | "RevillonBrothers"
  | "RazorenovHouse"
  | "PolyakovHouse";

const BuildingCard = (props: { name: BuildingName }) => {
  const { name } = props;

  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Oswald",
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={style}>
        {
          {
            TeleginHouse: <Cards.TeleginHouse />,
            FireBrigadePhoto: <Cards.FireBrigade />,
            SmirnovTradingHouse: <Cards.SmirnovTradingHouse />,
            FrankfurtHouse: <Cards.FrankfurtHouse />,
            KochanowskaHouse: <Cards.KochanowskaHouse />,
            TokarevHouse: <Cards.TokarevHouse />,
            PetrovHouse: <Cards.PetrovHouse />,
            StavrovskyHouse: <Cards.StavrovskyHouse />,
            KudryavtsevHouse: <Cards.KudryavtsevHouse />,
            Church: <Cards.Church />,
            CityLibrary: <Cards.CityLibrary />,
            VolkovHouse: <Cards.VolkovHouse />,
            RevillonBrothers: <Cards.RevillonBrothers />,
            RazorenovHouse: <Cards.RazorenovHouse />,
            PolyakovHouse: <Cards.PolyakovHouse />,
          }[name]
        }
      </Box>
    </ThemeProvider>
  );
};

export default BuildingCard;
