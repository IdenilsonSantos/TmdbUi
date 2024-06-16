import "./styles.scss";

function Title({ title, children }) {
  return (
    <>
      <div className="title">
        <h4>{title}</h4>
        {children}
      </div>
    </>
  );
}

export default Title;
