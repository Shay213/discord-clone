import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initialProfile";
import React from "react";
import { redirect } from "next/navigation";
import InitialModal from "@/components/modals/InitialModal";

type Props = {};

const Setup = async (props: Props) => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default Setup;
