import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 md:py-20">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 