import { FaReact, FaGithub } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">

      <div className="flex items-center mb-8">
        <img
          src="/Chef Curry.png"
          alt="Logo Chef Curry"
          className="w-60 h-50 mr-4"
        />
        <h1 className="text-5xl font-bold">Chef Curry Recipes</h1>
      </div>

      <p className="text-xl mb-6">
        Aplikasi Chef Curry Recipes ini dikembangkan sebagai bagian dari Ujian Tengah Semester praktikum Web Development Menggunakan React. 
        Aplikasi ini mengimplementasikan berbagai konsep fundamental seperti komponen fungsional, penggunaan hooks, state management, dan routing dengan React Router.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="flex items-center space-x-3">
          <FaReact size={40} className="text-blue-500" />
          <div>
            <h2 className="text-2xl font-semibold">React JS</h2>
            <p className="text-gray-600">Komponen fungsional dan hooks</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <RiTailwindCssFill size={40} className="text-blue-400" />
          <div>
            <h2 className="text-2xl font-semibold">Tailwind CSS</h2>
            <p className="text-gray-600">Desain responsif & modern</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <SiVite size={40} className="text-purple-500" />
          <div>
            <h2 className="text-2xl font-semibold">Vite</h2>
            <p className="text-gray-600">Build tool yang cepat</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaGithub size={40} className="text-gray-800" />
          <div>
            <h2 className="text-2xl font-semibold">GitHub</h2>
            <p className="text-gray-600">Source code dan kolaborasi</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mt-20 mb-4">Aplikasi ini dikembangkan untuk memenuhi komponen penilaian UTS, meliputi:</h2>
        <ul className="list-disc list-inside text-xl text-gray-700">
          <li>Implementasi Komponen & Prop Validation</li>
          <li>Penggunaan React Hooks dan Custom Hook untuk Data Fetching</li>
          <li>Manajemen State yang Efisien</li>
          <li>Routing antar Halaman dengan React Router</li>
          <li>Desain UI/UX yang responsif dan user-friendly</li>
        </ul>
      </div>
      
      <div className="border-t pt-6">
        <p className="text-lg text-gray-600">
          Aziz Kurniawan - Teknik Informatika, ITERA.
        </p>
        <p className="text-lg text-gray-600">
        122140097
        </p>
      </div>
    </div>
  );
};

export default About;
