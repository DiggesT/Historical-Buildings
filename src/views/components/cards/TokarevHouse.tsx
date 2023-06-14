import { CardHeader, Typography } from "@mui/material";
import TokarevHousePhoto from "../../../images/photos/TokarevHouse.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const TokarevHouse = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Дом Токарева с гостиницей «Гранд-Отель»"
        titleTypographyProps={{ variant: "h5" }}
        subheader="пр. Мира,76"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Трёхэтажное кирпичное здание с симметричной композицией главного фасада
        в стиле модерн возведено по проекту реконструкции архитектора Л. А.
        Чернышева в 1911 г. для купца А. В. Телегина. Это один из красивейших
        домов, формирующих участок современного проспекта Мира. Центральная
        часть отмечена круглым проёмом с дверью на балкон, поддерживаемой
        массивными фигурными кронштейнами. Интерес представляют кованые решётки
        ограждений и своеобразные ризалиты.
      </Typography>

      <img
        className="card-img"
        src={TokarevHousePhoto}
        alt="TokarevHouse.png"
      />

      <Typography id="modal-description" paddingTop="1rem">
        До реконструкции, осуществлённой Чернышёвым, здесь стоял двухэтажный
        каменный дом купца А. Г. Григорьева, в котором в 1877-1881 гг. находился
        окружной суд. В 1881 г. здание пострадало от пожара, и в 1883 г. перешло
        к золотопромышленнику Сергею Петровичу Токареву (по имени которого и
        назван дом, хотя в таком виде постройка уже ему не принадлежала). В
        1902-1905 гг. здесь размещалась гостиница «Метрополь», а в 1907 - 1909
        гг. - гостиница «Гранд-Отель». С 1911 г. в доме на первом этаже
        находились магазины обуви и платья Д. Ф. Разорёнова, книжный магазин М.
        И. Григоровской, а с 1912 г. на втором этаже стали действовать Городской
        Общественный банк и губернское жандармское управление, на третий этаж
        «вернулась» гостиница «Метрополь». После национализации в 1922-1929 гг.
        здесь разместились губком, окружком и горком ВКП(6), соответствующие
        комитеты комсомола. В 1931-1934 гг. дом занимала городская советская
        партийная школа. После войны здание отдано под городской Дворец
        пионеров.
      </Typography>
    </>
  );
};

export default TokarevHouse;