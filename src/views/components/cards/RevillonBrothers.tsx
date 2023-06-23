import { CardHeader, Typography } from "@mui/material";
import RevillonBrothersPhoto from "../../../images/photos/RevillonBrothers.png";
import logoIcon from "../../../images/icons/logoIcon.png";

export const RevillonBrothers = () => {
  return (
    <>
      <CardHeader
        avatar={<img width={50} src={logoIcon} alt="logoIcon.png" />}
        title="Торговый дом «Ревильон братья»"
        titleTypographyProps={{ variant: "h5" }}
        subheader="пр. Мира, 49"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Представительный трёхэтажный каменный особняк построен в 1910 гг. в
        стиле неоклассицизм по проекту архитектора В. А. Соколовского.
        Заказчиком проекта здания с производственными мастерскими в дворовой
        части выступило акционерное общество «Ревильон братья», российское
        представительство парижской компании, занимавшейся покупкой и продажей
        «пушного товара». Это кирпичное, прямоугольное в плане строение с
        подвалами и протяжённым трёхэтажным корпусом, примыкающим с юга.
        Соколовский строго следовал законам симметрии, придав зданию
        неповторимый и сильно отличающийся от остальных домов облик. Северным
        фасадом оно выходит в линию застройки главной улицы, занимая всю ширину
        владения. Главный северный фасад облицован красным гранитом и серым
        полированным мрамором - такая отделка в Красноярске тогда была
        использована впервые. Любопытным фрагментом здания является «спрятанный»
        эркер, который можно обнаружить, пройдя под арку: необычное для
        красноярской архитектуры «ласточкино гнездо».
      </Typography>

      <img
        className="card-img"
        src={RevillonBrothersPhoto}
        alt="RevillonBrothers.png"
      />

      <Typography id="modal-description" paddingTop="1rem">
        Кроме магазина, в этом же здании располагались контора фирмы и жилые
        квартиры. В компании «Ревильон братья» работал бухгалтером Яков
        Дубровинский, ставший первым советским городским головой в 1917 г. После
        муниципализации назначение сооружения неоднократно менялось. В 1922 г. в
        нём размещались штаб 26-й дивизии и склады Сибдальгосторга. С конца 1920
        по 1950 гг. здесь находились крупные общественные организации. С 1956 по
        1987 г. - юридический факультет красноярского университета. С 1987 г.
        здание используется как сцена драматического театра им. А. С. Пушкина.
        Дом не перестраивался. В период ремонтных работ утрачены мраморные
        камины в залах второго и третьего этажей. В январе 2011 г. в здании
        произошёл сильный пожар, памятнику архитектуры нанесён невосполнимый
        ущерб: полностью утрачены кровля, межэтажные перекрытия, внутреннее
        убранство, заполнение оконных и дверных проёмов.
      </Typography>
    </>
  );
};

export default RevillonBrothers;