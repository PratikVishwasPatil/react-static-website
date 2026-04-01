import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Code, GraduationCap, Award } from 'lucide-react';

export default function ProfessionalResume() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">PRATIK VISHWAS PATIL</h1>
          <p className="text-xl font-semibold text-blue-100">React JS Developer</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>pratikpatil7110@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 8668523261</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Kolhapur, Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase className="text-blue-600" size={24} />
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Experienced Full Stack Developer with 4+ years of expertise in modern web development. 
            Specialized in React JS development for the past 1.5 years, with strong foundation in 
            PHP, Laravel, and MySQL (3 years). Proven track record in building responsive single-page 
            applications, developing RESTful APIs, and converting React applications to mobile platforms 
            using Cordova. Skilled in delivering scalable solutions and collaborating with cross-functional 
            teams in Agile environments.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="p-8 border-b bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Code className="text-blue-600" size={24} />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Frontend Development</h3>
              <p className="text-gray-700">React JS, JavaScript (ES6+), HTML5, CSS3, jQuery, Ajax, JSON, Bootstrap</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Backend Development</h3>
              <p className="text-gray-700">PHP (Core & OOP), Laravel Framework, RESTful APIs, MVC Architecture</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Database & Tools</h3>
              <p className="text-gray-700">MySQL, Git, Version Control Systems</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Mobile Development</h3>
              <p className="text-gray-700">Apache Cordova, Hybrid App Development</p>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Briefcase className="text-blue-600" size={24} />
            Professional Experience
          </h2>

          {/* Current Role */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-800">React JS Developer</h3>
                <p className="text-blue-600 font-semibold">Mplussoft Technologies, Pune</p>
              </div>
              <span className="text-gray-600 font-medium">Aug 2023 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
              <li>Developing responsive and dynamic single-page applications using React JS</li>
              <li>Built complete company website as SPA with modern UI/UX principles</li>
              <li>Developed and integrated RESTful APIs using Core PHP for React applications</li>
              <li>Successfully completed 5 modules for Surya Equipments React JS website</li>
              <li>Converted React application to mobile app using Apache Cordova</li>
              <li>Collaborating with cross-functional teams in Agile development environment</li>
              <li>Implementing state management and optimizing application performance</li>
            </ul>
          </div>

          {/* Previous Role */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Laravel Developer</h3>
                <p className="text-blue-600 font-semibold">Mplussoft Technologies, Pune</p>
              </div>
              <span className="text-gray-600 font-medium">Feb 2023 - Jul 2023</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
              <li>Developed scalable web applications using Laravel 8/10 framework</li>
              <li>Created 124+ RESTful APIs for mobile and web applications</li>
              <li>Built admin panels and CMS systems with dynamic content management</li>
              <li>Integrated payment gateways (Razor Pay) and email functionality</li>
              <li>Optimized database queries and implemented efficient data handling for large datasets</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-800">PHP Developer</h3>
                <p className="text-blue-600 font-semibold">Vedbiz Technologies, Pune</p>
              </div>
              <span className="text-gray-600 font-medium">Jul 2021 - Nov 2022</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
              <li>Developed ERP systems and HR modules using Core PHP</li>
              <li>Built internal chat application and user access management systems</li>
              <li>Implemented CRUD operations and database management</li>
              <li>Collaborated with team members to deliver projects on time</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-800">PHP Developer Intern</h3>
                <p className="text-blue-600 font-semibold">GTL Software, Pune</p>
              </div>
              <span className="text-gray-600 font-medium">5 Months</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
              <li>Gained hands-on experience in PHP development and MySQL database</li>
              <li>Worked on real-world projects and learned industry best practices</li>
            </ul>
          </div>
        </div>

        {/* Key Projects */}
        <div className="p-8 border-b bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Award className="text-blue-600" size={24} />
            Key Projects
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Company Website (React JS SPA)</h3>
              <p className="text-sm text-blue-600 mb-2">React JS, JavaScript, CSS3, RESTful APIs</p>
              <p className="text-gray-700">Developed complete company website as a single-page application with responsive design, smooth navigation, and optimized performance.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Surya Equipments Website (React JS)</h3>
              <p className="text-sm text-blue-600 mb-2">React JS, Core PHP APIs, Cordova, MySQL</p>
              <p className="text-gray-700">Successfully completed 5 modules for the ERP system. Converted React application into mobile app using Apache Cordova for cross-platform deployment.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Local Super Mart</h3>
              <p className="text-sm text-blue-600 mb-2">Laravel 8, RESTful APIs, MySQL, Bootstrap</p>
              <p className="text-gray-700">Online grocery platform connecting local Kirana stores with customers. Developed 124 APIs and comprehensive admin panel for store and product management.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">MD Health</h3>
              <p className="text-sm text-blue-600 mb-2">Laravel 10, RESTful APIs, MySQL</p>
              <p className="text-gray-700">Healthcare platform offering medical supplies and services. Implemented MLM system, membership features, and mobile application APIs.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Sriyog Platform</h3>
              <p className="text-sm text-blue-600 mb-2">Laravel 10, MySQL, jQuery</p>
              <p className="text-gray-700">Yoga learning platform with video courses, podcasts, and chants focusing on holistic well-being and Indian philosophy.</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={24} />
            Education
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-gray-800">Master of Computer Applications (MCA)</h3>
              <p className="text-gray-700">Kolhapur Institute of Technology Management & Research, Shivaji University</p>
              <p className="text-gray-600">2020 | 66.17%</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Bachelor of Computer Science (B.Sc CS)</h3>
              <p className="text-gray-700">New College, Shivaji University Kolhapur</p>
              <p className="text-gray-600">2017 | 61.62%</p>
            </div>
          </div>
        </div>

        {/* Personal Skills & Details */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Skills</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Strong problem-solving and analytical thinking abilities</li>
            <li>Excellent team collaboration and independent work capabilities</li>
            <li>Ability to manage multiple projects in fast-paced environments</li>
            <li>Effective communication and documentation skills</li>
            <li>Quick learner with passion for new technologies</li>
          </ul>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><span className="font-semibold">Date of Birth:</span> 4 December 1996</div>
            <div><span className="font-semibold">Nationality:</span> Indian</div>
            <div><span className="font-semibold">Languages:</span> English, Hindi, Marathi</div>
            <div><span className="font-semibold">Hobbies:</span> Football, Trekking, Photography</div>
          </div>
        </div>

        {/* Declaration */}
        <div className="bg-gray-50 p-8 text-center">
          <p className="text-gray-700 italic">
            I hereby declare that the above-mentioned details are true to the best of my knowledge and belief.
          </p>
          <div className="mt-6">
            <p className="font-semibold text-gray-800">PRATIK VISHWAS PATIL</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="max-w-4xl mx-auto mt-6 text-center">
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
        >
          Print / Download as PDF
        </button>
        <p className="text-sm text-gray-600 mt-2">Use Ctrl+P (Cmd+P on Mac) and select "Save as PDF"</p>
      </div>
    </div>
  );
}