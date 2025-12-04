export default function HeaderBar({ title }) {
  return (
    <div className="header">
      <span className="breadcrumb">
        <span className="breadcrumb-home">HOME</span> / ARTICLES /
      </span>

      <h1 className="title">{title}</h1>
    </div>
  );
}
