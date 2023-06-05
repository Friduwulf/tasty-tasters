interface Props {
    id: string;
    name: string;
    dateCreated: Date;
    dueDate: Date;
  }
  
  export default function TastingCard({ id, name, dateCreated, dueDate }: Props) {
    console.log(id, name, dateCreated, dueDate);
  
    const formattedDateCreated = dateCreated.toLocaleDateString();
    const formattedDueDate = dueDate.toLocaleDateString();
  
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">{name}</h2>
          <p className="text-primary">Date Created: {formattedDateCreated}</p>
          <p className="text-primary">Date Due: {formattedDueDate}</p>
          <p></p>
          <div className="card-actions justify-end">
            <a role='button' href='http://localhost:3000/Hedonic' className="btn btn-primary">Get Tasting!</a>
          </div>
        </div>
      </div>
    );
  }