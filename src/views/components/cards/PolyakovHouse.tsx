import { CardHeader, Typography } from "@mui/material";
import PolyakovHousePhoto from "../../../images/photos/PolyakovHouse.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const PolyakovHouse = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Дом Полякова"
        titleTypographyProps={{ variant: "h5" }}
        subheader="Мира 51"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Каменный дом, образец торгового здания конца XIX века в стиле эклектика.
        Асимметрия фасада подчёркнута боковым размещением парадного входа в
        магазин.
      </Typography>

      <img
        className="card-img"
        src={PolyakovHousePhoto}
        alt="PolyakovHouse.png"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Здание принадлежало купцу, виноторговцу, почётному потомственному
        гражданину Варфоломею Григорьевичу Полякову. 1901 - 1911 гг.:
        мануфактурно-галантерейный и музыкальный магазины купца П. М. Дягтерёва.
        С 1913 г. здесь работали аптека, магазин медицинских инструментов,
        оптики и игрушек Б. С. Нови, а также зубная лечебница А. М. Нови. В
        советский период здесь находился магазин «Дом хлеба».
      </Typography>
    </>
  );
};

export default PolyakovHouse;
