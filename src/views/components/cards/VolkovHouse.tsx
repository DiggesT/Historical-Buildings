import { CardHeader, Typography } from "@mui/material";
import VolkovHousePhoto from "../../../images/photos/VolkovHouse.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const VolkovHouse = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Дом Волкова"
        titleTypographyProps={{ variant: "h5" }}
        subheader="пр. Мира, 47"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Двухэтажное каменное здание возведено в 1883 г. в стиле эклектика;
        расположено впритык к Дому служителей Покровской церкви, своеобразие
        которого и повлияло на характер и масштаб этого, более позднего,
        сооружения. Дом принадлежал военному коменданту Красноярска полковнику
        Иоакиму Волкову. В 1873-1901 гг. на арендованных площадях здесь
        размещалась учительская семинария. Она содержалась на средства от казны,
        волостных правлений и частных пожертвований. Принимали на обучение
        юношей от 16 до 18 лет, в основном детей зажиточных родителей, так как
        пансион не предоставлялся. В советский период здесь находились
        комендатура и гарнизонный универмаг.
      </Typography>

      <img className="card-img" src={VolkovHousePhoto} alt="VolkovHouse.png" />
    </>
  );
};

export default VolkovHouse;
