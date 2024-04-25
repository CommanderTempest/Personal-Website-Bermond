import ProjectLink from "./projectLink";
export default function Project(props) {
  var title = props.title;
  var type = props.type;
  var startDate = props.startDate;
  var endDate = props.endDate;
  var desc = props.desc;
  var tags = props.tags;
  var icon = props.icon;
  var links = props.links;
  var tagrow = [];
  var linksrow = [];

  if (tags) {
    for (let i = 0; i < tags.length; i++) {
      tagrow.push(<div className="tag">{tags[i]}</div>);
    }
  }

  if (links) {
    Object.entries(links).forEach(function ([key, value]) {
      linksrow.push(<ProjectLink title={key} link={value} />);
    });
  }

  return (
    <div className="project-card">
      <div className="project-card-icon">
        {icon && <img className="project-icon" src={icon} alt="project icon"/>}
        {!icon && <img className="project-icon" alt="project icon" />}
      </div>
      <div className="project-card-content">
        <div className="project-title">
          <b>{title}</b>
        </div>
        <div className="tag-line">{tagrow}</div>
        <div className="project-type">{type}</div>
        <div className="project-duration">
          {startDate} - {endDate}
        </div>
        <div className="project-links">{linksrow}</div>
        <p className="project-description">{desc}</p>
      </div>
    </div>
  );
}
