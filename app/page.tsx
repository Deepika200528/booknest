import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav className="w-full py-6 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-medium">B</span>
          <span className="text-lg font-semibold text-gray-800">BookNest</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">Pricing</Link>
          <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">About</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Sign In</Link>
          <Link href="/register" className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Organize Your <span className="text-indigo-600">Reading Journey</span> with BookNest
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover, track, and share your favorite books with our intuitive platform designed for book lovers.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition transform hover:-translate-y-1">
                Start Your Library
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-white border border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-700 font-medium py-3 px-6 rounded-lg shadow-sm transition">
                Browse Collection
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-indigo-100 rounded-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-50 rounded-2xl"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex space-x-4 mb-6">
                <div className="w-16 h-24 bg-indigo-50 rounded-lg"></div>
                <div className="w-16 h-24 bg-indigo-100 rounded-lg"></div>
                <div className="w-16 h-24 bg-indigo-200 rounded-lg"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-100 rounded-full"></div>
                <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose BookNest</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Extensive Library',
                description: 'Access thousands of books from various genres and authors'
              },
              {
                icon: '📊',
                title: 'Reading Analytics',
                description: 'Track your reading progress and set personal goals'
              },
              {
                icon: '👥',
                title: 'Community',
                description: 'Connect with fellow book lovers and share recommendations'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-medium">B</span>
              <span className="text-lg font-semibold">BookNest</span>
            </div>
            <p className="text-gray-400 text-sm">Your digital sanctuary for literary exploration.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-400 hover:text-white transition text-sm">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition text-sm">Pricing</Link></li>
              <li><Link href="/demo" className="text-gray-400 hover:text-white transition text-sm">Demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition text-sm">About</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition text-sm">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition text-sm">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">Terms</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-white transition text-sm">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BookNest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}