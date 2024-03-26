interface Ibutton {
  text: string;
}
export default function Button(props: Ibutton) {
  return (
    <div>
      <button className="mt-2 bg-blue-500 text-white rounded px-4 py-2">
        {props.text}
      </button>
    </div>
  );
}
