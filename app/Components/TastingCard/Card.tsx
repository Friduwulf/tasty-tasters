interface Props {
    id: string;
    name: string;
    // dateCreated: string;
    // dueDate: string;
}

export default function TastingCard({ id, name }: Props) {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        {/* <p className="text-primary">{dateCreated}</p>
        <p className="text-primary">{dueDate}</p> */}
        <p></p>
        <div className="card-actions justify-end">
          <a role='button' href='http://localhost:3000/Hedonic' className="btn btn-primary">Get Tasting!</a>
        </div>
      </div>
    </div>
  )
}