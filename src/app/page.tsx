import PageContainer from "@/layouts/PageContainer";
import PageLayout from "@/layouts/PageLayout";

export default function Home() {
  return (
    <>
      <PageLayout>
        <PageContainer paddingTopBottom={1}>
          <h1>Hello Next.js</h1>
        </PageContainer>
      </PageLayout>
    </>
  );
}
