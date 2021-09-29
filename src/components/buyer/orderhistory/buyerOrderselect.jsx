import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import React, { Fragment, useRef, useState } from "react";
import useOutsideClick from "../../seller/manageorder/useOutsideClick";

const filter_status = [
  { name: "All orders", id: "all" },
  { name: "Current Order", id: "current" },

  { name: "Picked up", id: "3" },
  { name: "Cancelled", id: "4" },
];
const Buyerdropselect = ({ filterManageOrder }) => {
  const [selected, setSelected] = useState({ name: "All", id: "all" });

  const divComponent = useRef();
  const ButtonRef = useRef();

  useOutsideClick(divComponent, () => {
    if (ButtonRef.current.ariaExpanded !== "false") {
      ButtonRef.current.click();
    }
  });

  const updateStat = (e) => {
    setSelected(e);
    filterManageOrder(e.id);
  };

  return (
    <div className="w-72" ref={divComponent} id="Buyerfilter">
      <Listbox value={selected} onChange={(e) => updateStat(e)}>
        <div className="relative mt-1 z-10">
          <Listbox.Button
            ref={ButtonRef}
            id="Buyerfilter"
            className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
          >
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filter_status.map((status, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
              cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={status}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {status.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                    absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Buyerdropselect;
