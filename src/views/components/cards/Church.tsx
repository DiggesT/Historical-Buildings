import { CardHeader, Typography } from "@mui/material";
import ChurchPhoto from "../../../images/photos/Church.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const Church = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Дом служителей Покровской церкви"
        titleTypographyProps={{ variant: "h5" }}
        subheader="пр. Мира, 45"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Двухэтажное каменное здание построено в 1828-1830 гг. и являлось
        традиционным жилым домом в стиле русский классицизм с характерным
        оформлением больших оконных проёмов. Во второй половине XIX века здесь
        жил первый епископ Енисейский и Красноярский Никодим, замечательный
        религиозный мыслитель и писатель. Служил инспектором и ректором
        нескольких духовных семинарий. Среди его трудов, хранящихся в
        Красноярском архиве - рукописи статей и переводов творений Святых отцов
        и книг Ветхого и Нового Завета; письма, отзывы на книги, статьи,
        дневники, воспоминания. В начале XX века в здании находился Сибирский
        торговый банк, в советское время - жилые квартиры.
      </Typography>

      <img className="card-img" src={ChurchPhoto} alt="Church.png" />
    </>
  );
};
