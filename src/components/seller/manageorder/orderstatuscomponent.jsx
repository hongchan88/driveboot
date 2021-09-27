import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import React, { Fragment, useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const people = [
  { name: "Order Placed", id: "0" },
  { name: "Processing", id: "1" },
  { name: "Ready to pick up", id: "2" },
  { name: "Picked up", id: "3" },
];
const Orderstatuscomponent = ({
  status,
  updatedSellerOrderStatus,
  sellerOrder,
  id,
}) => {
  const [selected, setSelected] = useState();

  const divComponent = useRef();
  const ButtonRef = useRef();

  useOutsideClick(divComponent, () => {
    if (ButtonRef.current.ariaExpanded != "false") {
      ButtonRef.current.click();
    }
  });

  const updateStat = (e) => {
    setSelected(e);

    updatedSellerOrderStatus(sellerOrder, e);
  };

  useEffect(() => {
    console.log(status, "status updated");
    setSelected(people[status]);
  }, []);

  return (
    <div className="w-72" ref={divComponent} id={id}>
      <Listbox value={selected} onChange={(e) => updateStat(e)}>
        <div className="relative mt-1 z-10">
          <Listbox.Button
            ref={ButtonRef}
            name={id}
            className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
          >
            <span id={`span${id}`} className="block truncate">
              {status == "4" ? "Customer cancelled order" : selected?.name}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          {status == "4" ? null : (
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${
                        active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                      }
              cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {person.name}
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
          )}
        </div>
      </Listbox>
    </div>
  );
};

export default Orderstatuscomponent;
