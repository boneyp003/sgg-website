import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <Navbar />
      </div>

      {/* Spacer to prevent content hiding behind navbar */}
      <div className="h-16" />

      {/* Page Content */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {children}
      </main>
    </div>
  );
}