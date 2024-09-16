import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
      <>
        <Container className="mt-8">
          <Title className="font-bold" text="Все пиццы" size="lg"/>
        </Container>
        <TopBar/>

        <Container className="pb-14 mt-9">
          <div className="flex gap-15">
            <div className="w-[250px]">
              <Filters/>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">
                товары
              </div>
            </div>
          </div>
        </Container>
      </>
  );
}