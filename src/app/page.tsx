import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { HeartIcon, CpuChipIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Teal-Green Glass Morphism Hero Section with Medical Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Teal-Green gradient background */}
        <div className="absolute inset-0 bg-medical-green" />
        
        {/* Additional gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-transparent to-green-600/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/10 to-teal-300/30" />
        
        {/* Animated background shapes with green tones */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/35 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>

        {/* Floating Medical Images */}
         <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
          {/* First Aid Kit - Top Right */}
          <div className="absolute top-32 right-10 lg:right-20">
            <div className="backdrop-blur-lg  animate-float">
              <Image
                src="/first-aid-kit.png"
                alt="Medical First Aid Kit"
                width={150}
                height={120}
                className="rounded-xl"
                style={{filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'}}
              />
            </div>
          </div>

          {/* Medical Pills - Left Side */}
          <div className="hidden lg:block absolute top-1/2 left-10 lg:left-20 transform -translate-y-1/2">
            <div className="backdrop-blur-lg   animate-float" style={{animationDelay: '2s'}}>
              <Image
                src="/medical-pills.png"
                alt="Medical Pills and Capsules"
                width={180}
                height={140}
                className="rounded-xl"
                style={{filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'}}
              />
            </div>
          </div>

          {/* Digital Thermometer - Bottom Right */}
          <div className="hidden lg:block absolute bottom-32 right-16 lg:right-32">
            
  <div className="backdrop-blur-lg  animate-float" style={{ animationDelay: '4s' }}>
    
    <div className="relative w-[120px] h-[160px]">
      {/* Text overlay */}
      

      {/* Image */}
      <Image
        src="/digital-thermometer.png"
        alt="Digital Thermometer"
        fill
        className="object-cover rounded-xl"
        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
      />
     
    </div>
 
  </div>
  
</div>


          {/* Additional floating elements for mobile */}
          <div className="lg:hidden">
            {/* Small floating icons for mobile */}
            <div className="absolute top-20 left-6 backdrop-blur-sm bg-white/10 rounded-full p-3 border border-white/20 animate-pulse">
              <HeartIcon className="h-8 w-8 text-white" />
            </div>
            <div className="absolute bottom-20 left-6 backdrop-blur-sm bg-white/10 rounded-full p-3 border border-white/20 animate-pulse" style={{animationDelay: '1s'}}>
              <CpuChipIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Main content container */}
        <div className="relative z-10 mt-10 mb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            {/* Glass card for hero content with enhanced visibility */}
            <div className="backdrop-blur-xl bg-white/15 rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl 
                          hover:bg-white/20 transition-all duration-500">
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl mb-6">
                <span className="block text-white text-shadow-lg">Your Trusted</span>
                <span className="block bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent text-shadow-lg">
                  Healthcare 
                </span>
                <span className="block text-white text-shadow-lg">Pharmacy</span>
              </h1>
              <p className="mt-6 text-xl text-white/95 max-w-3xl mx-auto leading-relaxed text-shadow">
                Your one-stop medical and cosmetic store for quality medicines, skincare, wellness, and healthcare essentials.
              </p>
              
              {/* Glass buttons container */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="backdrop-blur-lg bg-[#25D366] rounded-full hover:bg-[#1ebe5d] border border-white/40 hover:shadow-xl">
                  <Button size="lg" href="https://wa.me/919962649962?text=Hi%2CShifa%20Medicals%20Kelambakkam%2C%20I%20want%20to%20Order%20some%20medicine" className="bg-transparent hover:bg-transparent text-white px-8 py-4 font-semibold gap-2">
                  <FaWhatsapp className="w-7 h-7" />  Kelambakkam
                  </Button>
                </div>
                <div className="bg-[#25D366] rounded-full hover:bg-[#1ebe5d] border border-white/40 hover:shadow-xl">
                  <Button size="lg"  href="https://wa.me/919159779159?text=Hi%2C%20I%20want%20to%20Order%20some%20medicine" className="bg-transparent hover:bg-transparent text-white px-8 py-4 font-semibold gap-2">
                   <FaWhatsapp className="w-7 h-7" /> Navalur
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced floating stats cards with better glass effect */}
            <div className="mt-16 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Years of Experience', value: '20+' },
                { label: 'Happy Customer', value: '100000+' },
                { label: 'Products', value: '50000+' },
                { label: 'Trust', value: '100%' }
              ].map((stat, index) => (
                <div key={stat.label} 
                     className="backdrop-blur-lg bg-white/20 hover:bg-white/30 rounded-2xl p-6 border border-white/30 
                               shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                     style={{animationDelay: `${index * 0.1}s`}}>
                  <p className="text-3xl font-bold text-white text-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-white/90 font-medium text-shadow">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce" />
          </div>
        </div> */}
<div className="custom-shape-divider-bottom-1747497781">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
      </section>
   
      {/* Medical Equipment Showcase Section */}
      <section className="py-20 relative overflow-hidden ">
        
        {/* Subtle green background */}
       <div className="absolute inset-0 bg-gradient-to-br from-lime-500 via-yellow-400 to-white" />
<div className="custom-shape-divider-top-1747498527">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
          <div className="text-center mb-16 mt-6">
            <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl mb-4">
              Trusted Pharmacy. Genuine Medicines. No Compromise.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver only branded, 100% genuine medicines, sourced from licensed distributors. We do not offer discounts—because your health is our highest priority, not a selling point.
            </p>
          </div>

          {/* Medical Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* First Aid Kit */}
            <div className="group backdrop-blur-lg bg-[#fbdea5] rounded-3xl p-8 border border-teal-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-48 mb-6 flex items-center justify-center">
                <Image
                  src="/first-aid-kit.png"
                  alt="Medical First Aid Kit"
                  width={200}
                  height={160}
                  className="rounded-xl object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Emergency First Aid</h3>
              <p className="text-gray-600 text-center">Complete first aid kits with all essential medical supplies for emergency care and treatment.</p>
            </div>

            {/* Medical Pills */}
            <div className="group backdrop-blur-lg bg-[#fac9be] rounded-3xl p-8 border border-pink-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-48 mb-6 flex items-center justify-center">
                <Image
                  src="/cosmetics_2.png"
                  alt="Medical Pills and Capsules"
                  width={420}
                  height={260}
                  className="rounded-xl object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Pharma Skincare & Cosmetics</h3>
              <p className="text-gray-600 text-center">Wide range of cosmetics and pharmaceutical products from trusted manufacturers.</p>
            </div>

            {/* Digital Thermometer */}
            <div className="group backdrop-blur-lg bg-[#a8e0fd] rounded-3xl p-8 border border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-48 mb-6 flex items-center justify-center">
                <Image
                  src="/devices.png"
                  alt="Digital Thermometer"
                  width={460}
                  height={260}
                  className="rounded-xl object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Homecare Devices</h3>
              <p className="text-gray-600 text-center">Advanced digital medical instruments for accurate diagnosis and patient monitoring.</p>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="text-center">
            <div className="backdrop-blur-sm   inline-block">
              <Button size="lg" href="/products" className="bg-yellow-600 text-teal-600 hover:bg-gray-50 rounded-full px-8 py-4">
                View All Products
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Rest of your sections... */}
    </div>
  )
}