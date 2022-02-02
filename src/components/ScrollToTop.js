import React,{ useState} from 'react';
import '../styles/scrollTopBtn.css'
function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500){
          setVisible(true)
        } 
        else if (scrolled <= 500){
          setVisible(false)
        }
      };
      const scrollTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      window.addEventListener('scroll', toggleVisible);
  return <button className="scroll-top-btn" onClick={scrollTop}  style={{display: visible ? 'inline' : 'none'}}><i class="fas fa-arrow-up"></i></button>;
}

export default ScrollToTop;
