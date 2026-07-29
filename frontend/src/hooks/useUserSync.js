import React from "react";
import { useAuth, useUser } from "@clerk/react";
import { useEffect, useRef } from "react";
import { syncUser } from "../lib/api";
import { useMutation } from "@tanstack/react-query";

const useUserSync = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const lastSyncedUserId = useRef(null);

  const {
    mutate: syncUserMutation,
    isPending,
    isSuccess,
  } = useMutation({ mutationFn: syncUser, retry: 3 });

  useEffect(() => {
    if (!isSignedIn || !user) return;

    if (lastSyncedUserId.current === user.id) return;

    syncUserMutation(
      {
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName || user.firstName,
        imageUrl: user.imageUrl,
      },
      {
        onSuccess: () => {
          lastSyncedUserId.current = user.id;
        },
      },
    );
  }, [isSignedIn, user, syncUserMutation]);

  return { isSynced: isSuccess };
};

export default useUserSync;
