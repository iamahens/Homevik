import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; 2025 SmartHome Solutions. All Rights Reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="hover:text-cyan-400 transition duration-300">Facebook</a>
                <a href="#" className="hover:text-cyan-400 transition duration-300">Twitter</a>
                <a href="#" className="hover:text-cyan-400 transition duration-300">Instagram</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
