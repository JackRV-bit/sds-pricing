import { Check, Target, Mail, TrendingUp, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <img src="/pslogo (2).png" alt="Logo" className="h-12 w-12" />
      </div>

      {/* Hero Pricing Section */}
      <section className="relative bg-[#1b233f] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#fc6666] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fc6666] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#fc6666]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#fc6666] font-semibold uppercase tracking-wide text-sm">
                Complete Publisher Sales Solution
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Publisher sales is hard,<br />let us help
            </h1>
            <p className="text-xl text-gray-300 mb-2 max-w-3xl mx-auto">
              Tailored Lead Generation, Campaign Management, and Expert Sales Delivery for SSPs and AdNetworks
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team is here to troubleshoot and optimize your publisher sales process, helping you achieve faster results and sustained growth.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-10 md:p-12 mb-8">
            <div className="text-center mb-10">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-7xl md:text-8xl font-bold text-white">£2,000</span>
                <span className="text-3xl text-gray-400 ml-3">/month</span>
              </div>
              <p className="text-gray-300 text-xl">
                Full-service lead generation, email optimization, and campaign management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#fc6666] rounded flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-200">Publisher research & TAM analysis</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#fc6666] rounded flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-200">Contact data & list cleansing</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#fc6666] rounded flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-200">Full email setup (DKIM, SPF, DMARC etc)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#fc6666] rounded flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-200">Campaign management & scheduling</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#fc6666] rounded flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-200">Spam filter optimization</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#fc6666] rounded flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-200">Compliance & unsubscribe handling</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#fc6666] rounded flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-200">Ongoing optimization & support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-[#fc6666] text-white font-semibold rounded-lg hover:bg-[#fd7a7a] transition-all duration-200 shadow-lg hover:shadow-xl text-lg">
                Subscribe
              </button>
              <button className="px-12 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-200 text-lg">
                Learn more
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* What's Included Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            What you get
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to scale your SSP or AdNetwork effectively
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#fc6666]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#fc6666]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Lead Generation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Domain discovery, TAM analysis, contact data, and list cleansing ready for seamless CRM import.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#fc6666]/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#fc6666]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email Configuration</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Complete setup from domain config using Google/Reply.io, ensuring smooth, compliant campaigns that avoid spam filters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-[#fc6666]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#fc6666]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Campaign Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Full campaign launch and management with sequences, scheduling, and compliant unsubscribe handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Social Proof */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 text-center mb-16 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold mb-2 text-[#fc6666]">15 years</div>
              <p className="text-gray-600">Marketing campaign experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-[#fc6666]">25 years</div>
              <p className="text-gray-600">Supply-side ad tech expertise</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-3 text-gray-900">
              Trusted by leading SSPs and AdNetworks
            </h3>
            <p className="text-center text-gray-600 mb-12">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex gap-1 mb-3">
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                "Remarkable publisher experience and technical knowledge. I'm so glad we're working with you."
              </p>
              <p className="font-bold text-gray-900 text-sm">MM Media Group</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex gap-1 mb-3">
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                "They identified a ton of issues with our email set up which would have meant losing hundreds of prospects to spam"
              </p>
              <p className="font-bold text-gray-900 text-sm">Advally</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex gap-1 mb-3">
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
                <Star className="w-4 h-4 fill-[#fc6666] text-[#fc6666]" />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                "Essential for our business intelligence, Sales & Marketing efforts. A pleasure to work with."
              </p>
              <p className="font-bold text-gray-900 text-sm">TradeHouse Media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-3 text-gray-900">
            Why outsource to us?
          </h3>
          <p className="text-center text-gray-600 mb-10">
            Established ad tech experts with tailored outsourcing solutions
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold mb-2 text-gray-900">Reduce risk</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mitigate high turnover, training costs, and inconsistent performance. Companies save an average of 78% on operational costs through strategic outsourcing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold mb-2 text-gray-900">Focus on what matters</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We handle your sales pipeline from lead identification to campaign management so you can concentrate on your core business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold mb-2 text-gray-900">Avoid spam filters</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proper domain and email configuration with DKIM, SPF, and DMARC ensures successful outreach and improved deliverability.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
