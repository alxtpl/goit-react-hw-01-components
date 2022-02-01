import s from "../TransactionHistory/TransactionHistory.module.scss";

const TransactionHistory = ({items}) => {
 
  return (
      <>
      
        
   <table className={s["transaction-history"]}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
   
    {items.map((el,i) => {
        let col="white";
               {if(i%2===0){col="grey"}else col="white"}

              return (
                  
                <tr key={el.id} style={{ backgroundColor:col}}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </tr>

              )
          })}
  </tbody>
</table>
</>
      

      



      
    
  );
};

export default TransactionHistory;