function Msg({ name, image }) {
  return (
    <div>
      <img className="pic" src={image} alt={name} />
      <h1>hello {name} 😍</h1>
    </div>
  );
}
