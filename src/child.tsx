const Child = (props: { sendChild: string }) => {
  const { sendChild } = props;

  return <p>{sendChild}</p>;
};

export default Child;
//export default Hello;