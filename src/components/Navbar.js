const Navbar = (props) => {
  return (
    <div
      className="Navbar"
      style={{
        boxSizing: 'border-box',
        position: 'relative',
        borderRight: '1px solid lightgray',
        width: props.width,
        height: props.height,
      }}
    >
      <div className="top" style={{ width: '100%', padding: 20 }}>
        Top
      </div>
      <div
        className="bottom"
        style={{ position: 'absolute', width: '100%', bottom: 0, padding: 20 }}
      >
        Bottom
      </div>
    </div>
  );
};

export default Navbar;
