import moment from "moment";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { formatSalary } from "@/utils/formatSalary";
import { IApplication } from "@/types";

interface Props {
  data: IApplication;
}

function ViewApplicationModal({ data }: Props) {
  const salary =
    data && formatSalary(data.min_compensation, data.max_compensation);

  return (
    <>
      {/*Main Content  */}
      <section className="flex items-end justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold">{data.position}</h2>
          <h3>
            {data.company_name} &middot; {data.setup} &middot; {salary}
          </h3>
        </div>
      </section>

      <section className="flex justify-between">
        <p>
          Applied on {moment(data.application_date).format("MMMM DD, YYYY")}
        </p>

        <p>{data.status}</p>
      </section>

      {/* Note */}
      {data.note && (
        <section className="">
          <p>Note</p>
          <ScrollArea className="h-24 whitespace-pre-line rounded border border-neutral-400 p-2 text-sm">
            {data.note}
          </ScrollArea>
        </section>
      )}

      {/* Dialog Close */}
      <DialogFooter>
        <a href={data.url} target="_blank" className="w-full">
          <Button className="w-full">View Job Posting</Button>
        </a>
      </DialogFooter>
    </>
  );
}

export default ViewApplicationModal;
