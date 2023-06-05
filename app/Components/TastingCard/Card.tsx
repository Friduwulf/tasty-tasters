interface Props {
    id: string;
    name: string;
    date: string;
    due: string;
    tests: [];
}

export default function TastingCard({ id, name, date, due, tests }: Props) {
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3>Test Due: {due}</h3>
    <p></p>
    <div className="card-actions justify-end">
      <a role='button' href='' className="btn btn-primary">Get Tasting!</a>
    </div>
  </div>
</div>
}