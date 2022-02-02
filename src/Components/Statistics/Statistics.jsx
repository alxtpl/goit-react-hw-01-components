import PropTypes from "prop-types";

import s from "../Statistics/Statistics.module.scss";
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
const Statistics = (props) => {
  const { title, stats,} = props
  return (
    <section className={s.statistics}>

      {title && (<h2 className={s.title}>{title}</h2>)}

      <ul className={s["stat-list"]}>

        {stats.map((el) => {
          return (

            <li className={s.item} key={el.id} style={{ backgroundColor:getRandomColor()}}>
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          )
        })}


      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};
// Statistics.propTypes = {
//   title: PropTypes.string,
//    stats: PropTypes.array.isRequired,
// };

// Statistics.defaultProps = {
//   title: null,
//    stats: null,
//   }
export default Statistics;