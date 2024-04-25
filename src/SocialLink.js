export default function Social(props)
{
  var icon = props.icon;
  var link = props.link;
  var text = props.text;
  var alter = props.alt;
  return (
    <a className="icon-links" href={link}><img src={icon} target="_blank" alt={alter} rel="noreferrer"/>{text}</a>
  )
}