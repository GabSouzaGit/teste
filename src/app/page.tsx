import Title from "@/components/Title";
import LinkButton from "@/components/LinkButton";
import PostRender from "@/components/post/PostRender";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center pb-8">
        <Title size="large"> Seja muito bem vindo! </Title>
        <div>
          <LinkButton route="/createpost"> Criar novo post </LinkButton>
        </div>
      </div>
      <div>
        <PostRender/>
      </div>
    </div>
  )
}
