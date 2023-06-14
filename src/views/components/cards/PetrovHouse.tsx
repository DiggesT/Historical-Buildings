import { CardHeader, Typography } from "@mui/material";
import PetrovHousePhoto from "../../../images/photos/PetrovHouse.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const PetrovHouse = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Дом Петрова"
        titleTypographyProps={{ variant: "h5" }}
        subheader="пр. Мира, 74"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Двухэтажное кирпичное здание с причудливыми переплетениями элементов
        разных стилей с доминирующим мавританским колоритом, построено в 1911 г.
        по проекту Л. А. Чернышёва. На втором этаже размещалась квартира
        чиновника А. А. Петрова, на первом - винно-бакалейный магазин П. Е.
        Хромова и оружейный магазин С. Н. Штеблер. После национализации 1920 гг.
        дом был отдан под жильё советских чиновников, на первом этаже открылись
        железнодорожные кассы предварительной продажи билетов. Позднее здесь
        разместилось фармацевтическое училище.
      </Typography>

      <img className="card-img" src={PetrovHousePhoto} alt="PetrovHouse.png" />
    </>
  );
};

export default PetrovHouse;
