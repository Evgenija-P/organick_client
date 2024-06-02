const RecipientInfo = ({ info }) => {
  const {
    first_name,
    last_name,
    country,
    city,
    street,
    apartment,
    state,
    zip,
    email,
    phone,
    message,
  } = info;
  return (
    <article className="w-full grid grid-cols-3 gap-x-5 gap-y-10 justify-between col-span-2 mb-[100px]">
      <p>
        <span className="text-xl font-extrabold">Ім'я: </span>
        {last_name}
      </p>
      <p>
        <span className="text-xl font-extrabold">Прізвище: </span>
        {first_name}
      </p>
      <p>
        <span className="text-xl font-extrabold">Країна: </span> {country}
      </p>
      <p>
        <span className="text-xl font-extrabold">Область: </span> {state}
      </p>
      <p>
        <span className="text-xl font-extrabold">Місто: </span> {city}
      </p>
      <p>
        <span className="text-xl font-extrabold">Вулиця: </span> {street}
      </p>
      <p>
        <span className="text-xl font-extrabold">Квартира: </span> {apartment}
      </p>
      <p>
        <span className="text-xl font-extrabold">Поштовий код: </span> {zip}
      </p>
      <p>
        <span className="text-xl font-extrabold">Електронна пошта: </span> {email}
      </p>
      <p>
        <span className="text-xl font-extrabold">Телефон: </span> {phone}
      </p>
      <p className="col-span-2">
        <span className="text-xl font-extrabold">Повідомлення: </span> {message}
      </p>
    </article>
  );
};

export default RecipientInfo;
