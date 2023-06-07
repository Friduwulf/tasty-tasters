import Link from 'next/link';

interface TestProps {
    id: string;
    testType: string;
    batch: string;
    tastingId: string;
    beerName: string;
    beerStyle: string;
}

export default function Test({ id, testType, batch, tastingId, beerName, beerStyle }: TestProps) {
    console.log(
        id, 
        testType,
        batch,
        tastingId,
        beerName,
        beerStyle
        );

    return (
        <Link className="card max-w-lg bg-neutral shadow-xl" href={`/${testType}`}>
            <div className="card-body">
                <h2 className="card-title text-primary">{testType}</h2>
                <p className="text-base-100">Beer: {beerName}</p>
                <p className="text-base-100">Batch: {batch}</p>
            </div>
        </Link>
    );
}