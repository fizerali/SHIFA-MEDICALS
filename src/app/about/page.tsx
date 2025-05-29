import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shifa Medicals - your trusted healthcare pharmacy.',
}

export default function About() {
  return (
    <div className="bg-gradient-to-br from-green-700  to-lime-300">
      {/* Hero Section */}
      <section className="py-16   relative ">
        {/* <div className="custom-shape-divider-bottom-1748356049">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div> */}
        <div className="mx-auto max-w-7xl px-4 mt-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-3xl font-bold italic text-gray-100 sm:text-5xl">About</h4>
            <h1 className="text-4xl font-bimini tracking-[0.1em] text-gray-100 sm:text-5xl "style={{ fontFamily: 'BiminiBold, sans-serif' }}>
               
              Shifa Medicals
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
              Retail pharmacy with a focus on your 20+ years of experience and dedication to healthcare & skincare.
            </p>
          </div>
        </div>

      </section>

      {/* Our Story */}
      <section className="py-4 relative">
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
             {/* <div className="custom-shape-divider-top-1748356325">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div> */}
            <div>
              <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-200 mb-4">
                Founded in 2006, Shifa Medicals began with a simple mission guided by our mentor <strong><span className="text-yellow-200 font-semibold">- Haji.S.A.Sharbudeen -</span></strong> providing high-quality healthcare products and services to the community of Kelambakkam. Our commitment to excellent customer service, reliable products, and a friendly atmosphere has made us a trusted name in the local healthcare sector.
              </p>
              <p className="text-lg text-gray-200 mb-4">
                Building on our success and driven by the desire to serve more people, we expanded our presence by opening a second branch in Navalur in 2018. This new location allows us to reach even more customers, continuing our mission of making healthcare accessible and convenient.
              </p>
              <div className="group mt-8 space-y-4 backdrop-blur-xl bg-[#78866b] rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl 
                hover:bg-white transition-all duration-500">
  <div className="flex items-start">
    <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1" />
    <span className="ml-3 text-gray-100 group-hover:text-gray-800 transition-colors duration-500">
      GST registered outlet
    </span>
  </div>
  <div className="flex items-start">
    <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1" />
    <span className="ml-3 text-gray-100 group-hover:text-gray-800 transition-colors duration-500">
      Fssai Certified
    </span>
  </div>
  <div className="flex items-start">
    <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1" />
    <span className="ml-3 text-gray-100 group-hover:text-gray-800 transition-colors duration-500">
      Authorized dispensing medical outlet
    </span>
  </div>
</div>

            </div>
            <div className="mt-12 lg:mt-0">
              <div className=" h-96 rounded-lg flex items-center justify-center overflow-hidden">
                
                
                <Image
                                src="/our_story.png"
                                alt="Medical First Aid Kit"
                                width={384}
                                height={384}
                                className="rounded-xl"
                                style={{filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'}}
                              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To improve the health and well-being of our community by offering a wide range of medical products, professional advice, and personalized care. We believe in building strong relationships with our customers based on trust and respect.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600">
                We envision a healthier community where everyone has easy access to the medications and health products they need. We aim to be the go-to medical store in Kelambakkam and Navalur, known for our comprehensive range of products and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}