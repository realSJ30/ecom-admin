"use client";
import { useEffect, useState } from "react";

import StoreModal from "@/components/modals/store-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  /*
  purpose of this is to avoid hydration
  this will be added to the root layouts file which is a server component
  and this is a client component
  */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
      {/* other types of modal */}
    </>
  );
};

export default ModalProvider;
