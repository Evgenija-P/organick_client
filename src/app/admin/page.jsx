import LinkButton from "@/components/UI/LinkButton";
import Wrapper from "@/components/Wrapper";

export default function AdminPage() {
  return (
    <main className="w-full py-[100px]">
      <Wrapper>
        <LinkButton
          goTo="/admin/orders"
          title="Перейти до замовлень"
          style="main"
          className="mx-auto"
        />
      </Wrapper>
    </main>
  );
}
