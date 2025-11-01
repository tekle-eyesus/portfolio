// import React, { useState, useEffect } from "react";
// import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

// const Header = ({ theme, toggleTheme }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#skills", label: "Skills" },
//     { href: "#projects", label: "Projects" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <header className={`header ${isScrolled ? "scrolled" : ""}`}>
//       <div className='container'>
//         <nav className='nav'>
//           <a href='#home' className='logo'>
//             Tekle M.
//           </a>

//           <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
//             {navItems.map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className='nav-link'
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           <div className='nav-controls'>
//             <button
//               className='theme-toggle'
//               onClick={toggleTheme}
//               aria-label={`Switch to ${
//                 theme === "light" ? "dark" : "light"
//               } mode`}
//             >
//               {theme === "light" ? <FaMoon /> : <FaSun />}
//             </button>

//             <button
//               className='menu-toggle'
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label='Toggle menu'
//             >
//               {isMenuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </nav>
//       </div>

//       <style jsx>{`
//         .header {
//           position: fixed;
//           top: 0;
//           width: 100%;
//           background: var(--primary-bg);
//           border-bottom: 1px solid var(--border);
//           z-index: 1000;
//           transition: all 0.3s ease;
//         }

//         .header.scrolled {
//           background: var(--primary-bg);
//           box-shadow: 0 2px 20px var(--shadow);
//         }

//         .nav {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 0;
//         }

//         .logo {
//           font-family: "Oswald", sans-serif;
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: var(--accent);
//           text-decoration: none;
//         }

//         .nav-menu {
//           display: flex;
//           gap: 2rem;
//         }

//         .nav-link {
//           color: var(--text-primary);
//           text-decoration: none;
//           font-weight: 500;
//           transition: color 0.3s ease;
//           position: relative;
//         }

//         .nav-link:hover {
//           color: var(--accent);
//         }

//         .nav-link::after {
//           content: "";
//           position: absolute;
//           bottom: -5px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: var(--accent);
//           transition: width 0.3s ease;
//         }

//         .nav-link:hover::after {
//           width: 100%;
//         }

//         .nav-controls {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .theme-toggle,
//         .menu-toggle {
//           background: none;
//           border: none;
//           color: var(--text-primary);
//           font-size: 1.2rem;
//           cursor: pointer;
//           padding: 0.5rem;
//           transition: color 0.3s ease;
//         }

//         .theme-toggle:hover,
//         .menu-toggle:hover {
//           color: var(--accent);
//         }

//         .menu-toggle {
//           display: none;
//         }

//         @media (max-width: 768px) {
//           .menu-toggle {
//             display: block;
//           }

//           .nav-menu {
//             position: absolute;
//             top: 100%;
//             left: 0;
//             width: 100%;
//             background: var(--primary-bg);
//             flex-direction: column;
//             padding: 2rem;
//             border-bottom: 1px solid var(--border);
//             transform: translateY(-100%);
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//           }

//           .nav-menu.active {
//             transform: translateY(0);
//             opacity: 1;
//             visibility: visible;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import AIChatBot from "./AIChatBot/AIChatBot"; // Add this import

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className='container'>
          <nav className='nav'>
            <a href='#home' className='logo'>
              Alex Chen
            </a>

            <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='nav-link'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className='nav-controls'>
              <button
                className='theme-toggle'
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>

              <button
                className='menu-toggle'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label='Toggle menu'
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </nav>
        </div>

        <style jsx>{`
          .header {
            position: fixed;
            top: 0;
            width: 100%;
            background: var(--primary-bg);
            border-bottom: 1px solid var(--border);
            z-index: 1000;
            transition: all 0.3s ease;
          }

          .header.scrolled {
            background: var(--primary-bg);
            box-shadow: 0 2px 20px var(--shadow);
          }

          .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
          }

          .logo {
            font-family: "Oswald", sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
            text-decoration: none;
          }

          .nav-menu {
            display: flex;
            gap: 2rem;
          }

          .nav-link {
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
          }

          .nav-link:hover {
            color: var(--accent);
          }

          .nav-link::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .theme-toggle,
          .menu-toggle {
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            transition: color 0.3s ease;
          }

          .theme-toggle:hover,
          .menu-toggle:hover {
            color: var(--accent);
          }

          .menu-toggle {
            display: none;
          }

          @media (max-width: 768px) {
            .menu-toggle {
              display: block;
            }

            .nav-menu {
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: var(--primary-bg);
              flex-direction: column;
              padding: 2rem;
              border-bottom: 1px solid var(--border);
              transform: translateY(-100%);
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s ease;
            }

            .nav-menu.active {
              transform: translateY(0);
              opacity: 1;
              visibility: visible;
            }
          }
        `}</style>
      </header>

      {/* Add the AI ChatBot component */}
      <AIChatBot />
    </>
  );
};

export default Header;
