import type { Metadata } from 'next'
import { IconBabyBottle, IconPill, IconPrescription,IconReportMedical,IconPerfume } from '@tabler/icons-react';
import { 
  WrenchScrewdriverIcon,
  HeartIcon,
  HomeIcon,
  CpuChipIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'



export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive healthcare solutions including medical equipment supply, maintenance, and consulting services.',
}

const services = [
  {
    icon: <IconPrescription className="h-12 w-12" />,
    title: "Prescription Medicines",
    description: "We stock a comprehensive selection of prescription medications from trusted pharmaceutical brands.",
    features: [
      "Accurate dispensing",
      "Offer guidance",
      "Proper usage, dosage, and possible side effects.",
      "Quick delivery across India"
    ]
  },
  {
    icon: <IconPerfume   className="h-12 w-12" />,
    title: "Over-the-Counter (OTC), Cosmetics & Personal Care",
    description: "Explore our curated range of cosmetic and skincare products from leading brands.",
    features: [
      "Pain relief to allergy care",
      "Manage common health concerns",
      "Daily essentials",
      "Premium beauty products",
      
    ]
  },
  {
    icon: <IconBabyBottle className="h-12 w-12" />,
    title: "Health & Wellness Essentials, Baby & Mother Care",
    description: "Modern healthcare technology solutions including telemedicine and EHR systems.",
    features: [
      "vitamins, nutritional supplements",
      "blood pressure monitors",
      "infant formulas, diapers, baby hygiene",
      "mother care essentials during every stage of parenting"
    ]
  }
]

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-green-700  to-lime-300">
      {/* Hero Section */}
      <section className=" py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl mt-20 font-bold text-white sm:text-5xl italic">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to enhance patient care and operational efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" py-8 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-green-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}