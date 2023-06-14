import { CardHeader, Typography } from "@mui/material";
import CityLibraryPhoto from "../../../images/photos/CityLibrary.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const CityLibrary = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Бывшая городская библиотека"
        titleTypographyProps={{ variant: "h5" }}
        subheader="ул. Сурикова, 23"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Кирпичное одноэтажное здание было флигелем находившегося рядом дома
        казацкого семейства Путимцевых. В 1889 г. в здании на средства горожан
        была открыта городская Общественная библиотека. В 1897 г. книготорговец
        А. Ф. Комаров подарил городской библиотеке ещё 1259 томов и 489
        журналов. Вскоре помещение стало тесным. В 1899 гг. купец О. А. Данилов
        решил построить на собственные средства новое здание. 1 октября 1900 г.
        библиотека переехала в одноэтажное каменное здание в Почтамтском
        переулке (ныне - ул. Перенсона), где она располагается и теперь, - это
        Центральная городская библиотека им. А. М. Горького. В советский период
        в здании бывшей городской библиотеки размещалась экономическая служба
        треста столовых.
      </Typography>

      <img className="card-img" src={CityLibraryPhoto} alt="CityLibrary.png" />
    </>
  );
};
