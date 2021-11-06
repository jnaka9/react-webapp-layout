const Toolbar = (props) => {
  return (
    <div
      className="Toolbar"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        borderBottom: '1px solid lightgray',
        width: props.width,
        height: props.height,
      }}
    >
      <div
        className="left"
        style={{
          display: 'flex',
          lineHeight: props.height + 'px',
          paddingLeft: 10,
        }}
      >
        Left
      </div>
      <div
        className="right"
        style={{
          display: 'flex',
          lineHeight: props.height + 'px',
          marginLeft: 'auto',
          paddingRight: 10,
        }}
      >
        Right
      </div>
    </div>
  );
};

export default Toolbar;
