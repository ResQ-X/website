"use client"

import { onAuthStateChanged } from "firebase/auth";
import { useState, useCallback, useEffect } from "react"
import { auth } from "../../firebase/firebase.config";
import router from "next/router";

export  function isUserLoggedIn(): boolean {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          return true;
        } else {
            return false;
        }
        
    });
    return false;
} 

/* const isUserLoggedIn = useCallback(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              return true;
            } else {
                return false;
            }
        });
    }, [router]);
 */

/* useEffect(() => {
    isUserLoggedIn();
}, [isUserLoggedIn]); */