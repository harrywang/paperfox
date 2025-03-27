import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Icons } from "@/components/icons";

const features = [
  {
    name: 'Smart Paper Management',
    description: 'Organize and manage your academic papers with our intuitive interface. Track submissions, revisions, and feedback all in one place.',
    icon: Icons.fileText,
  },
  {
    name: 'Collaborative Review',
    description: 'Work seamlessly with co-authors and reviewers. Share feedback, track changes, and maintain version history effortlessly.',
    icon: Icons.users,
  },
  {
    name: 'Real-time Updates',
    description: 'Stay informed with instant notifications about paper status, review requests, and important deadlines.',
    icon: Icons.bell,
  },
  {
    name: 'Secure & Private',
    description: 'Your research is protected with enterprise-grade security. We ensure your work remains confidential and accessible only to authorized users.',
    icon: Icons.shield,
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
                  <span className="text-gray-900">Paper Management System</span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Reimagined
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Streamline your academic paper review process with PaperFox. Collaborate seamlessly, track changes, and manage your research papers all in one place.
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
                Everything you need to manage your papers
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                PaperFox provides a comprehensive platform for managing your academic papers, from submission to publication.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
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
