const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth"
  });
  console.log(elementRef.current.offsetTop)
};

export default scrollToSection;