function ApplicationsOverview() {
  return (
    <div className="grid h-full w-full grid-cols-4">
      <div className="flex flex-col">
        <p className="text-xl font-bold">400</p>
        <p>Application submitted</p>
      </div>

      {/*  */}
      <div className="flex flex-col">
        <p className="text-xl font-bold">3</p>
        <p>Ongoing applications</p>
      </div>

      {/*  */}
      <div className="flex flex-col">
        <p className="text-xl font-bold">39</p>
        <p>Rejected Applications</p>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-bold">12</p>
        <p>Job Offers</p>
      </div>
    </div>
  );
}

export default ApplicationsOverview;
