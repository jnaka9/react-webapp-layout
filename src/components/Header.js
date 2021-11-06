const Header = (props) => {
  return (
    <div
      className="header"
      style={{
        boxSizing: 'border-box',
        borderBottom: '1px solid lightgray',
        width: props.width,
        height: props.height,
        display: 'flex',
      }}
    >
      <div
        className="left"
        style={{
          display: 'flex',
          lineHeight: props.height + 'px',
          paddingLeft: 20,
        }}
      >
        <div style={{ marginRight: 100 }}>logo</div>
        <input
          type="text"
          placeholder="Search"
          style={{
            display: 'inline-block',
            boxSizing: 'border-box',
            margin: '4px 0',
            border: '1px solid lightgray',
            borderRadius: 4,
            padding: '0 10px',
            width: 200,
          }}
        ></input>
      </div>
      <div
        className="right"
        style={{
          display: 'flex',
          marginLeft: 'auto',
          paddingRight: 20,
          lineHeight: props.height + 'px',
        }}
      >
        <button
          style={{
            display: 'inline-block',
            border: 'none',
            borderRadius: '4px',
            width: 100,
            backgroundColor: 'gray',
            color: 'white',
          }}
        >
          BUTTON
        </button>
      </div>
    </div>
  );
};

export default Header;
