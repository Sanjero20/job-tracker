import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import { useViewModal } from "@/stores/viewModalStore";
import moment from "moment";

function ViewApplicationModal() {
  const { data, isOpen, toggleModal } = useViewModal();

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      {data && (
        <DialogContent>
          <section className="flex items-end justify-between">
            <div className="flex flex-col">
              <h2 className="font-bold">{data.position}</h2>
              <h3>
                {data.company_name} &middot; {data.setup}
              </h3>
            </div>

            <p>{data.status}</p>
          </section>

          {/* Salary */}
          <section>
            <p>
              Salary: {data.min_compensation} - {data.max_compensation}
            </p>
            <p>
              Applied on {moment(data.application_date).format("MMMM DD, YYYY")}
            </p>
          </section>

          {/* Note */}
          {data.note && (
            <section className="">
              <p>Note</p>
              <ScrollArea className="h-24 whitespace-pre-line rounded border border-primary p-2 text-sm">
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
