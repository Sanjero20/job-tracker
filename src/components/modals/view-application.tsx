import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import { useViewModal } from "@/stores/viewModalStore";
import moment from "moment";
import { formatSalary } from "@/utils/formatSalary";

function ViewApplicationModal() {
  const { data, isOpen, toggleModal } = useViewModal();

  const salary =
    data && formatSalary(data?.min_compensation, data?.max_compensation);

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      {data && (
        <DialogContent>
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

          <DialogFooter>
            <a href={data.url} target="_blank" className="w-full">
              <Button className="w-full">View Job Posting</Button>
            </a>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}

export default ViewApplicationModal;
