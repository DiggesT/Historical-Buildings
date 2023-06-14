import { CardHeader, Typography } from "@mui/material";
import FireBrigadePhoto from "../../../images/photos/FireBrigade.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const FireBrigade = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Пожарная команда || части города"
        titleTypographyProps={{ variant: "h5" }}
        subheader="ул.Ленина, 59"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Здание построено в 1904 г. на месте старой обветшавшей пожарной части. В
        1909-1911 гг. оно было реконструировано по проекту архитектора С. Г.
        Дриженко. Большая заслуга в возведении пожарного депо принадлежит
        золотопромышленнику, городскому голове Павлу Козьмичу Гудкову, который
        возглавлял Вольно-пожарное общество с 1900 г.
      </Typography>

      <img className="card-img" src={FireBrigadePhoto} alt="FireBrigade.png" />

      <Typography id="modal-description" paddingTop="1rem">
        Элементы фасада подчёркивают крупные членения его структуры. Боковые
        ризалиты выделены и завершены высокими шипцами. Над воротами гаража на
        втором этаже расположены сдвоенные окна. Сегодня в этом здании размещена
        Пожарная часть N 1Центрального района г. Красноярска. Это действующая и
        самая старая пожарная часть города.
      </Typography>
    </>
  );
};

export default FireBrigade;
