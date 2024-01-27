"use client";
import { Modal } from "@/components/custom/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const RootPage = () => {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  /* 
  this is just a null page which triggers 
  the modal for creating store on first time sign in
  */
  return null;
};

export default RootPage;
