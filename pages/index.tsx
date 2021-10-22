const INDEX_PAGE = `# Citadel debug server

The server for storing debug logs of Citadel.
`;

const Frontpage = () => {
  const items0 = [];

  for (const value0 of INDEX_PAGE.split("\n")) {
    items0.push(<code>{value0}</code>);
  }

  return (
    <div>
      <pre className="code">
        {items0.map((value, index) => {
          return value;
        })}
      </pre>
    </div>
  );
};

export default Frontpage;
