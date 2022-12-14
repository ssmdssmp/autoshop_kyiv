import "./delivery.scss";
import deliveryImg from "../../assets/img/delivery.png";
const Delivery = () => {
  return (
    <div className="delivery-wrapper">
      <h2>Доставка</h2>
      <div className="delivery">
        <img src={deliveryImg} alt="" />
        <div className="delivery-text">
          <h3>Доставка по Україні</h3>
          <p>
            Терміни доставки по Україні в середньому становлять 2-3 дні, залежно
            від перевізника, населеного пункту та вихідних/святкових днів. Як
            правило, наші клієнти отримують замовлення вже наступного робочого
            дня після відправки.
          </p>
          <p>
            Вартість доставки залежить від ваги та розміру товару, розрахунок за
            тарифами служби доставки, а так само вартості товару, якщо оплата
            відбувається післяплатою. Вартість перевезення оплачує покупець.
            Перевізники можуть додатково упаковувати товар відповідно до своїх
            вимог. Вартість такої упаковки сплачує покупець.
          </p>
          <h4>Самовівіз: м. Київ, вул. Басейна, 7Б</h4>
        </div>
      </div>
    </div>
  );
};
export default Delivery;
