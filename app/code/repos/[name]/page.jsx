import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/Repo";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
    </div>
  );
};
export default RepoPage;
