import { ArrowRight, BarChart3, CheckCircle2, Globe2, Layers, Zap } from "lucide-react";
import Link from "next/link";
import Scene3D from "./components/Scene3D";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Zap className="h-6 w-6 text-blue-600" />
            <span>Nexus<span className="text-blue-600">SaaS</span></span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block">
              Log in
            </Link>
            <Link
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 overflow-hidden relative">
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]"></div>
          
          <Scene3D />

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 mb-8">
              New: Analytics Dashboard 2.0
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Scale your business <br className="hidden sm:inline" />
              <span className="text-blue-600">without the limits</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-10">
              The all-in-one platform designed to help you build, manage, and grow your digital presence with ease. Join thousands of satisfied users today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
              {['Acme Corp', 'GlobalTech', 'Nebula', 'CloudScale', 'Vertex'].map((logo) => (
                <div key={logo} className="flex items-center text-xl font-bold">
                  <Globe2 className="mr-2 h-6 w-6" /> {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Everything you need to succeed
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our platform provides a comprehensive suite of tools to streamline your workflow and boost productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
                  title: "Advanced Analytics",
                  description: "Gain deep insights into your performance with our real-time analytics dashboard and custom reporting."
                },
                {
                  icon: <Layers className="h-10 w-10 text-blue-600" />,
                  title: "Seamless Integration",
                  description: "Connect with your favorite tools effortlessly. We support over 100+ integrations out of the box."
                },
                {
                  icon: <Zap className="h-10 w-10 text-blue-600" />,
                  title: "Lightning Fast",
                  description: "Experience zero latency. Our distributed infrastructure ensures your data is always available instantly."
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to transform your business?
            </h2>
            <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl mb-10">
              Join thousands of happy customers who have scaled their operations with NexusSaaS.
            </p>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold text-blue-600 shadow hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started for Free
            </Link>
            <p className="mt-4 text-sm text-blue-200">
              <CheckCircle2 className="inline h-4 w-4 mr-1" /> No credit card required
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link href="#" className="hover:underline">Features</Link></li>
                <li><Link href="#" className="hover:underline">Pricing</Link></li>
                <li><Link href="#" className="hover:underline">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link href="#" className="hover:underline">Documentation</Link></li>
                <li><Link href="#" className="hover:underline">Help Center</Link></li>
                <li><Link href="#" className="hover:underline">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><Link href="#" className="hover:underline">Privacy</Link></li>
                <li><Link href="#" className="hover:underline">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-semibold">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>NexusSaaS</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} NexusSaaS Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}