interface InfoProps {
  info: string;
}

const ButtonInfo = (props: InfoProps) => {
  return (
    <div className="text-xs lg:text-sm font-ubuntu-mono text-gray-250">{props.info}</div>
  );
};

export default ButtonInfo;
