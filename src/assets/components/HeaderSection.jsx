
const HeaderSection = (props) => {
  return (
    <header className="section-header">
        <div className="section-header-prefix">
            <i className="fa-solid fa-cubes"></i>
            <span>{props.prefix}</span>
        </div>
        <h2 className="section-header-title text-3xl">{props.titlestart} <span style={{ color: "var(--primary-color)" }}>{props.titleend}</span></h2>
    </header>
  )
}

export default HeaderSection