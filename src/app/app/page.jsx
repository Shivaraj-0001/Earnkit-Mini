import AppNavbar from "@/components/app/AppNavbar";
import AppSidebar from "@/components/app/AppSidebar";
import ChatPanel from "@/components/app/ChatPanel";
import PreviewPanel from "@/components/app/PreviewPanel";

export default function BuilderPage() {
  return (
    <div className="min-h-screen">
      <AppNavbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-12">
        {/* Sidebar */}
        <aside className="md:col-span-3">
          <AppSidebar />
        </aside>

        {/* Chat */}
        <section className="md:col-span-5">
          <ChatPanel />
        </section>

        {/* Preview */}
        <section className="md:col-span-4">
          <PreviewPanel />
        </section>
      </div>
    </div>
  );
}
