import React from "react";
import { Camera, Shield, Award, MapPin, Users, Clock, CheckCircle, Building2, Flag, Heart } from "lucide-react";

export default function GovernmentEventFilming() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-4">
            <Camera className="h-4 w-4" />
            <span>Government & Corporate</span>
            <span>•</span>
            <span>October 7, 2024</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Capturing Malaysia's Stories Together: Professional Government Event Filming & Media Production
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            At Reelsify Media, we believe every moment tells a story — and some stories deserve to be shared with the world.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Flag className="h-16 w-16 mx-auto mb-4 opacity-80" />
            <p className="text-lg font-medium">Proudly Serving Malaysia's Government Institutions</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            As a trusted media production company in Kuala Lumpur, we are proud to work hand in hand with Malaysian government ministries, departments, and agencies to record and highlight the nation's most meaningful events.
          </p>
        </div>

        {/* Our Purpose Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Heart className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Purpose: Showcasing Malaysia's Beauty and Progress</h2>
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our goal is to capture the heart of Malaysia — its people, culture, achievements, and places — through powerful visuals that inspire both locals and visitors.
          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether it's an official launch, national celebration, exhibition, or tourism campaign, our production team ensures that every detail is documented professionally and creatively.
          </p>
        </section>

        {/* Trusted Partners Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trusted by Government and Public Institutions</h2>
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            From MOTAC, Tourism Malaysia, Jabatan Muzium Malaysia, to KLCC, MITEC, and other national venues, we provide complete event filming, corporate video production, drone coverage, and photography services tailored to meet the expectations of government partners.
          </p>
          
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Government Partners Include:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-slate-700">Ministry of Tourism, Arts & Culture (MOTAC)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-slate-700">Tourism Malaysia</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-slate-700">Jabatan Muzium Malaysia</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-slate-700">KLCC & MITEC</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Our experienced team understands the importance of protocol, professionalism, and precision — ensuring every shoot reflects the dignity and excellence of your organization.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Government Agencies Choose Reelsify Media</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-slate-900">Protocol & Professionalism</h3>
              </div>
              <p className="text-slate-700">Reliable on-site coordination for official and VIP events with full understanding of government protocols.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-slate-900">Fast & Professional</h3>
              </div>
              <p className="text-slate-700">Fast delivery and professional editing that meets tight government deadlines and quality standards.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-slate-900">Cinema-Grade Equipment</h3>
              </div>
              <p className="text-slate-700">High-definition filming using cinema-grade equipment for broadcast-quality results.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Flag className="h-6 w-6 text-red-600" />
                <h3 className="font-semibold text-slate-900">National Image Alignment</h3>
              </div>
              <p className="text-slate-700">Content that aligns with Malaysia's national image and tourism vision, enhancing our country's reputation.</p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">More Than Just Media — We Tell Malaysia's Story</h2>
            </div>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At Reelsify Media, we don't just record visuals. <strong>We preserve memories.</strong>
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our mission is to help government ministries, cultural institutions, and tourism boards share Malaysia's story with pride — from its vibrant festivals to its innovative future.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              We believe in showcasing the professionalism, hospitality, and creativity that define our nation. Every video we create aims to strengthen Malaysia's image as a beautiful, progressive, and united country.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
            <Camera className="h-16 w-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              📸 Let's work together to capture Malaysia's journey — beautifully, professionally, and meaningfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=60127183499&text=Hi%2C%20I%27m%20interested%20in%20government%20event%20filming%20services&type=phone_number&app_absent=0"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                WhatsApp Us
              </a>
              <a 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Get Quote
              </a>
            </div>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="/blog/kl-event-videography-checklist" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-sm text-slate-500">Event Planning</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">KL Event Videography Checklist</h3>
              <p className="text-slate-600">Essential planning guide for successful event filming in Kuala Lumpur.</p>
            </a>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-green-600" />
                <span className="text-sm text-slate-500">Coming Soon</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Corporate Video Production Best Practices</h3>
              <p className="text-slate-600">Professional tips for creating impactful corporate videos that represent your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="bg-slate-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-300">
            Ready to showcase your government event professionally? 
            <a href="/#contact" className="text-blue-400 hover:text-blue-300 ml-2 underline">Contact us today</a>
          </p>
        </div>
      </div>
    </div>
  );
}
