import AppNavbar from "@/components/app/AppNavbar";
import AppSidebar from "@/components/app/AppSidebar";
import ChatPanel from "@/components/app/ChatPanel";
import PreviewPanel from "@/components/app/PreviewPanel";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* top navigation bar */}
      <AppNavbar />

      {/* three-pane layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 md:grid-cols-12">
        {/* Sidebar (Projects) */}
        <aside className="md:col-span-3">
          <AppSidebar />
        </aside>

        {/* Chat area */}
        <section className="md:col-span-5">
          <ChatPanel />
        </section>

        {/* Preview section */}
        <section className="md:col-span-4">
          <PreviewPanel />
        </section>
      </div>
    </div>
  );
}
