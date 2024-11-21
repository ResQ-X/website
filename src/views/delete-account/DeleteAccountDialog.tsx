"use client"

import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface DeleteAccountDialogProps {
  email: string;
  onConfirm: () => void;
}

export const DeleteAccountDialog: React.FC<DeleteAccountDialogProps> = ({ email, onConfirm }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full p-4 border bg-red-600 rounded-xl focus:ring-2 focus:ring-[#FF0000] ring-offset-2 transition-all duration-300 outline-none text-white font-bold placeholder-slate-400 hover:bg-[#FF0000]">Delete Account</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            <p>This action cannot be undone. It will permanently delete your account.</p>
            <p className="font-medium">Email: {email}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className="bg-red-600 hover:bg-red-700">
            Yes, delete my account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
