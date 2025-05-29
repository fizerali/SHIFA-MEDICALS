import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { IconPhoneRinging,IconBrandWhatsapp } from '@tabler/icons-react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shifa Medicals</h3>
            <p className="text-gray-300">
              Your Local Pharmacy in Navalur & Kelambakkam – Health, Beauty, & Wellness Delivered.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300">+91 9159 77 9159 </p>
            <p className="text-gray-300">+91 9159 41 9159 </p>
            <p className="text-gray-300">shifamedicals@yahoo.com</p>
          </div> */}
          
          
          <div>
            <h4 className="font-semibold mb-4">Address- KELAMBAKKAM</h4>
            <p className="text-gray-300">
              3/76 a,<br />
              OMR (Kelambakkam-Kovalam Junction),<br />
              Kelambakkam - 603103, Chennai,<br />
              Tamilnadu, India<br />
               <p className="flex items-center space-x-2">
              <FaWhatsapp className="w-5 h-5 text-green-600" /><IconPhoneRinging className="w-5 h-5 text-blue-600" />
                <span>9962 64 9962</span>
              </p>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Address- NAVALUR</h4>
            <p className="text-gray-300">
              22,<br />
              OMR (opp AGS Cinemas),<br />
              Navalur - 600130, Chennai,<br />
              Tamilnadu, India<br />
             <p className="flex items-center space-x-2">
              <FaWhatsapp className="w-5 h-5 text-green-600" /><IconPhoneRinging className="w-5 h-5 text-blue-600" />
                <span>9159 77 9159</span>
              </p>
              <p className="flex items-center space-x-2">
<IconPhoneRinging className="w-5 h-5 text-gray-900" /><IconPhoneRinging className="w-5 h-5 text-blue-600" /><span>9159 41 9159 </span>
              </p>
              
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2025 Shifa Medicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}