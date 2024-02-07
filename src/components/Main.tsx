import { useMenu } from '../context/globalContext.tsx';
import styles from './Main.module.css';

const Main = () => {
  const menu = useMenu();
  console.log(menu);

  return (
    <div>
      {menu.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} className={styles.image} />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
        )
      } )}
    </div>
  )
}

export default Main;
