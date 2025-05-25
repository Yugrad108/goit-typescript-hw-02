import { useEffect, useState } from "react";
import styles from "./ScrollTopBtn.module.css";
import { FaAnglesUp } from "react-icons/fa6";

// Добавлено явное указание типа компонента React.FC (функциональный компонент)
const ScrollTopBtn: React.FC = () => {
  // Добавлен указание типа состояния: boolean
  const [visible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Добавлен тип возвращаемого значения функции (void)
  const scrollTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`${styles.scrollTopBtn} ${visible ? styles.visible : ""}`}
      aria-label="Scroll to top" /* Добавлено для улучшения доступности */
      type="button" /* Явное указание типа кнопки */
    >
      <FaAnglesUp />
    </button>
  );
};

export default ScrollTopBtn;

// import { useEffect, useState } from "react";
// import styles from "./ScrollTopBtn.module.css";
// import { FaAnglesUp } from "react-icons/fa6";

// const ScrollTopBtn = () => {
//   const [visible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <button
//       onClick={scrollTop}
//       className={`${styles.scrollTopBtn} ${visible ? styles.visible : ""}`}
//     >
//       <FaAnglesUp />
//     </button>
//   );
// };

// export default ScrollTopBtn;
