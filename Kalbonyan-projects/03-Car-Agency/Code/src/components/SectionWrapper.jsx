const SectionWrapper = (Component, idName, className) => {
  return function HOC() {
    return (
      <section className={className}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </section>
    );
  };
};
export default SectionWrapper;
