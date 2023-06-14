import { CardHeader, Typography } from "@mui/material";
import FrankfurtHousePhoto from "../../../images/photos/FrankfurtHouse.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const FrankfurtHouse = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Дом Франкфурта"
        titleTypographyProps={{ variant: "h5" }}
        subheader="пр. Мира, 57"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Компактный трёхэтажный особняк «вклинивается» в ряд исторической
        двухэтажной застройки. Лаконичные формы модерна рационального
        направления определяют стилистику лицевого фасада; на выступающей
        центральной части размещены балконы, венчающиеся каменными шарами. По
        сторонам ризалита в верхних ярусах расположено по три узких окна.
      </Typography>

      <img
        className="card-img"
        src={FrankfurtHousePhoto}
        alt="FrankfurtHouse.png"
      />

      <Typography id="modal-description" paddingTop="1rem">
        На этом участке с 1880 г. находился дом с первым в Красноярске книжным
        магазином. В 1911-1913 гг. его существенно перестроили по проекту
        архитектора С. Г. Дриженко для мехового магазина и квартиры купца Э. И.
        Франкфурта. В 1915 г. сюда переехала контора Сибирского АО пароходства и
        промышленности. С 1921 г. открылся магазин Сибдальгосторга, с 1926 г. на
        нижнем этаже - управление городской железнодорожной станцией.
      </Typography>
    </>
  );
};

export default FrankfurtHouse;
