import type { Metadata } from 'next'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'
import { IconBrandGoogleMaps } from '@tabler/icons-react';
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Shifa Medicals for all your healthcare equipment needs.',
}

const contactInfo = [
    {
    icon: <IconBrandGoogleMaps className="h-12 w-12" />,
    title: "Kelambakkam Store",
    details: [
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.7205251287917!2d80.21966356961832!3d12.786164107068874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52509290a01901%3A0x259d0346d558d71d!2sSHIFA%20MEDICALS!5e0!3m2!1sen!2sin!4v1748431427225!5m2!1sen!2sin" width="300" height="250" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    ]
  },
  {
    icon: <IconBrandGoogleMaps className="h-12 w-12" />,
    title: "Navalur Store",
    details: [
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13083.938564375076!2d80.22323606862895!3d12.85114205325638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b43e92b4f21%3A0x70fc411a3ccccebd!2sSHIFA%20MEDICALS!5e0!3m2!1sen!2sin!4v1748430382869!5m2!1sen!2sin" width="300" height="250"  style={{ border: 0 }}
              allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    ]
  },

 
  {
    icon: <ClockIcon className="h-12 w-12" />,
    title: "Business Hours",
  details: [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
],
details1: [
  "9:30 am–11 pm",
  "9:30 am–11 pm",
  "9:30 am–11 pm",
  "9:30 am–11 pm",
  "9:30 am–12:30 pm 3:30 pm–11 pm",
  "9:30 am–11 pm",
  "9:30 am–11 pm"
]
  }
]

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-green-700  to-lime-300">
      {/* Hero Section */}
      <section className="py-16  " >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl mt-20 font-bold text-gray-100 sm:text-5xl italic">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-blue-100 ">
              We're here to help with all your healthcare & skincare needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             
            {contactInfo.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className=" text-green-500 mb-6">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-green-700">{item.title}</h3>
                <div className="mt-2 space-y-1">
                {item.details?.map((detail, index) => (
  <p key={index} className="text-black">
    {detail}
    <span className="text-gray-600"> {item.details1?.[index] || ""}</span>
  </p>
))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section> */}
    </div>
  )
}