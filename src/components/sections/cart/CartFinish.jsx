const CartFinish = () => {
  return (
    <div className="w-[70%] absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 border border-green drop-shadow-lg rounded-[30px] bg-lite_pink p-10">
      <h3 className="text-[50px] font-bold mb-[50px] text-center">Ваше замовлення оформлено! </h3>
      <p className="text-[30px] font-bold mb-[50px] text-center">Номер замовлення:</p>
      <p className="text-[30px] font-bold text-center">Детальна інформація по замовленню тут.</p>
    </div>
  );
};

export default CartFinish;
