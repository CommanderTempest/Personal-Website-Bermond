export default function ProjectLink(props) {
  var title = props.title;
  var link = props.link;
  return (
    <a className="project-links-link" href={link} target="_blank" rel="noreferrer">{title}</a>
  );
}