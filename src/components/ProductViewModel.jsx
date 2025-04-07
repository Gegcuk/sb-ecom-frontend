import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Divider } from "@mui/material";
import { useState } from "react";
import Status from "./Status";
import { MdClose, MdDone } from "react-icons/md";

function ProductViewModal({ open, setOpen, product, isAvailable }) {
  const {
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = product;

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border rounded-lg bg-white p-12">
            {image && (
              <div className="flex justify-center aspect-[3/2]">
                <img src={image} alt={productName} />
              </div>
            )}
            <div className="px-6 pt-4 pb-1">
              <DialogTitle
                as="h1"
                className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-1"
              >
                {productName}
              </DialogTitle>
              <div className="space-y-2 text-gray-700 pb-4">
                <div className="flex items-center justify-between gap-2">
                  {specialPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through">
                        ${Number(price).toFixed(2)}
                      </span>
                      <span className="sm:text-xl font-semibold text-slate-600">
                        ${Number(specialPrice).toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="sm:text-xl font-semibold text-slate-600">
                        ${Number(price).toFixed(2)}
                      </span>
                    </div>
                  )}

                  {isAvailable ? (
                        <Status
                        text="In-Stock"
                        icon={MdDone}
                        bg="bg-teal-200"
                        color="text-teal-900"
                        />
                  ) : (<Status
                        text="Out-Of-Stock"
                        icon={MdClose}
                        bg="bg-rose-200"
                        color="text-rose-700"
                        />)}
                </div>
              </div>
            </div>

            <Divider/>

            <div className="text-sm">{description}</div>

            <div className="flex gap-4 justify-center">
              <button
                className="bg-blue-500 rounded-lg px-3 py-1 text-white"
                onClick={() => setOpen(false)}
              >
                Got it
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default ProductViewModal;
