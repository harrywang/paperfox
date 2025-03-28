import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Icons } from "@/components/icons";

const features = [
  {
    name: '🤖 AI at the Core',
    description: 'From reviewer suggestions to feedback summarization, PaperFox uses AI to reduce busywork and enhance decision-making.',
    icon: Icons.brain,
  },
  {
    name: '🎨 Design That Delights',
    description: 'Built with clarity and elegance, PaperFox brings a thoughtful, modern UI to academic workflows — finally.',
    icon: Icons.palette,
  },
  {
    name: '🔓 Truly Open-Source',
    description: 'No vendor lock-in. Fully extensible. A transparent platform you can trust, adapt, and improve with your community.',
    icon: Icons.gitHub,
  },
  {
    name: '🎯 Built for the Way You Work',
    description: 'Flexible workflows, modular components, and seamless collaboration — whether you\'re a solo researcher or an editorial team.',
    icon: Icons.workflow,
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative py-16 sm:py-24">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  <span className="text-gray-900">Paper Management, Reimagined</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Open-source. Beautifully designed. AI-powered.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button asChild size="lg">
                    <Link href="/signup">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Academics Deserve Better Tools
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              PaperFox delivers the modern, AI-powered, open-source platform academics have been waiting for.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
