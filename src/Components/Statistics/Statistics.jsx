import "./Statistics.css"

const Statistics = (props) => {
  const { title, stats, id } = props
  return (
    <section class="statistics">

      {title && (<h2 class="title">{title}</h2>)}

      <ul class="stat-list">

        {stats.map((el) => {
          return (

            <li class="item" key={id}>
              <span class="label">{el.label}</span>
              <span class="percentage">{el.percentage}%</span>
            </li>
          )
        })}


      </ul>
    </section>
  );
};

export default Statistics;