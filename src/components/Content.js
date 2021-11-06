const Content = (props) => {
  return (
    <div
      className="Content"
      style={{ width: props.width, height: props.height, overflowY: 'scroll' }}
    >
      <div style={{ height: 2000, backgroundColor: 'gray' }}></div>
    </div>
  );
};

export default Content;
