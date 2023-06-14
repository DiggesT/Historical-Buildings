import { CardHeader, Typography } from "@mui/material";
import TeleginHousePhoto from "../../../images/photos/TeleginHouse.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const TeleginHouse = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Дом Телегина"
        titleTypographyProps={{ variant: "h5" }}
        subheader="ул. Ленина, 67"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Двухэтажное деревянное здание построено в 1892 г., стены обшиты тёсом. В
        1908 г. новый владелец - купец 2 гильдии Александр Васильевич Телегин
        нарядно оформил фасады в псевдорусском стиле, имитируя мотивы народной
        вышивки. Дом богато декорирован на всех элементах композиции: фризе,
        фрон-тоне, карнизе, пилястрах, наличниках, ограждении балконов. Тонкая
        бахрома пропильной (накладной) резьбы придавала зданию облик сказочного
        терема, лёгкость и ажурность.
      </Typography>

      <img
        className="card-img"
        src={TeleginHousePhoto}
        alt="TeleginHouse.png"
      />
    </>
  );
};

export default TeleginHouse;
