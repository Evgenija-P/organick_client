import LinkButton from "@/components/UI/LinkButton";

const Quantity = ({ id }) => {
  return (
    <div className="w-full flex items-center gap-x-3">
      <p>Quantity:</p> {id}
      <div className="flex gap-x-2 items-center">
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <LinkButton goTo="/cart" title="Go to Cart" style="main" />
    </div>
  );
};

export default Quantity;
