import { Suspense } from "react";
import UsersListRSC from "./UsersListRSC";
import PageLayout from "@/layouts/PageLayout";
import PageContainer from "@/layouts/PageContainer";

export default function StreamingPage() {
  return (
    <PageLayout>
      <PageContainer>
        <div style={{ padding: "2rem" }}>
          <h2 className="text-2xl font-bold">React Streaming Demo</h2>
          <p>
            You should see this text immediately. The user list below will
            appear after 3 seconds, streamed from the server.
          </p>

          <Suspense fallback={<h1>Loading users...</h1>}>
            <UsersListRSC />
          </Suspense>
        </div>
      </PageContainer>
    </PageLayout>
  );
}
