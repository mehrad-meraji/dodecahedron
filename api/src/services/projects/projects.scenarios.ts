import type { Prisma } from "@prisma/client";

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: { data: { userID: "String", name: "String", description: "String" } },
    two: { data: { userID: "String", name: "String", description: "String" } },
  },
});

export type StandardScenario = typeof standard;
