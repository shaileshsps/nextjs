export default function Checkboxes({ data }) {
  return (
    <div style={{ textAlign: "left" }}>
      {
        data.map((node) => (
          <div key={node.id} className="parent-checkbox-container">
            <input type="checkbox" />
            {node.label}
            {node.children && <Checkboxes data={node.children} />}
          </div>
        ))
      }
    </div >
  );
}
